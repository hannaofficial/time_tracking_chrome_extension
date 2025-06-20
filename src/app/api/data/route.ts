import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma'
import {summarizeText} from '@/lib/summarizer';

interface IncomingPageItem {
    url: string;
    title?: string;
    time: number;
    extractedText?: string;
    summary? : string;
    textExtractedAt?: number;
}

interface IncomingDomainEntry {
    totalTime: number;
    items: IncomingPageItem[];
}

interface IncomingTimeData {
    [domain: string]: IncomingDomainEntry;
}

interface IncomingHistoryItem {
    id: string; // From chrome.history API
    url?: string;
    title?: string;
    lastVisitTime?: number; // Milliseconds timestamp
    visitCount?: number;
}

interface IncomingPayload {
    history?: IncomingHistoryItem[];
    timeData?: IncomingTimeData;
}

let lastReceivedData: any =  null


export async function POST(request: Request) {


    try {

        const data = await request.json() as IncomingPayload;
        console.log("API endpoint receive data: ", JSON.stringify(data, null, 2));

        const {history, timeData} = data;
        const dbOperations = [];
        const pagesToSummarize: { url: string; text: string }[] = [];;

        lastReceivedData = data;
        console.log("Data stored in memory.");

        if (timeData && typeof timeData === 'object'){
            for (const domainName in timeData){
                if(Object.prototype.hasOwnProperty.call(timeData, domainName)){
                    const domainEntry = timeData[domainName];
                    if (!domainName || domainName.trim() === ""){
                        console.warn("API: Skipping domain entry with empty or invalid domain name", domainEntry);
                        continue;
                    }
                    dbOperations.push(
                        prisma.domainStat.upsert({
                            where: {name: domainName},
                            create:{
                                name: domainName,
                                totalTimeSpentSeconds: Math.round(domainEntry.totalTime/1000),
                            },
                            update:{
                                totalTimeSpentSeconds: Math.round(domainEntry.totalTime/1000),
                            }
                        })
                    );
                    if (domainEntry.items && Array.isArray(domainEntry.items)){
                        for (const pageItem of domainEntry.items){
                          if(pageItem.url && pageItem.url.trim() !== ""){
                            dbOperations.push(prisma.pageVisit.upsert({
                                where: {url: pageItem.url},
                                create:{
                                    url: pageItem.url,
                                    title: pageItem.title ?? 'No Title',
                                    timeSpentSeconds: Math.round(pageItem.time/1000),
                                    domainName: domainName,
                                    extractedText: pageItem.extractedText,
                                    textExtractedAt: pageItem.textExtractedAt ? new Date(pageItem.textExtractedAt):null
                                },
                                update: {
                                    title: pageItem.title ?? 'No title',
                                    timeSpentSeconds: Math.round(pageItem.time/1000),
                                    extractedText: pageItem.extractedText,
                                    textExtractedAt: pageItem.textExtractedAt ? new Date(pageItem.textExtractedAt): null,
                                }
                            })
                        );



                        if(pageItem.extractedText){

                            pagesToSummarize.push({url: pageItem.url, text: pageItem.extractedText})

                            // console.log(`Generating summary for: ${pageItem.url}`)
                            // const summary = await summarizeText(pageItem.extractedText);
                            // dbOperations.push(prisma.pageVisit.update({
                            //     where: { url: pageItem.url },
                            //     data: {
                                   
                            //         summary: summary,
                            //     }
                            // }))
                            // If you want to update/add just one field (e.g., summary), you can use update with only that field:
                            // Example: Only update the summary field for the existing record
                            // await prisma.pageVisit.update({
                            //     where: { url: pageItem.url },
                            //     data: { summary: summary }
                            // });

                        }
                          } else{
                            console.warn(`API: Skipping page item with invalid URL for domain ${domainName}:`, pageItem)
                          }
                        }
                    }
                }
            }
        }
        if (dbOperations.length > 0){
            await prisma.$transaction(dbOperations); // used when operation are dependent for example here both domain stat and pageView are linked
            console.log(`API: Succesfully processed and saved ${dbOperations.length} data operations to DB\n\n${dbOperations.slice(0,2)}`);
        }else{
            console.log("API: No valid history or timeData found in payload to process.")
        }

        if (pagesToSummarize.length > 0){
            console.log(`API: Starting background summarization for ${pagesToSummarize.length} pages.`);
           generateSummariesInBackground(pagesToSummarize);
        }
        
        return NextResponse.json({message : "Data received successfully in POST method"}, {status: 200, headers: {
            'Access-Control-Allow-Origin': '*', // Important for CORS
            'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
    } catch (error) {

        console.error("Error processing request data: ", error);
        return NextResponse.json({message: "Error processing request data"}, {status: 500, headers: {
            'Access-Control-Allow-Origin': '*', // Important for CORS
            'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });

        
    }

}

async function generateSummariesInBackground(pages: {url: string; text: string}[]){

    try{
        // here you have the promises or the status of the summaryPromises not exactly the promises
        // this is good for performance because we are simultanoulsy creating summary of all the pages
        const summaryPromises = pages.map(page => 
            summarizeText(page.text).then(summary => ({
                url: page.url,
                summary: summary
            }))
        )

        const summaries = await Promise.all(summaryPromises);

        const updateOperations = summaries.map(result => 
            prisma.pageVisit.update({
                where: {url: result.url},
                data: {summary: result.summary}
            })
        );

        if (updateOperations.length > 0){
            await prisma.$transaction(updateOperations);
            console.log(`BACKGROUND: Successfully saved ${updateOperations.length} summaries to the database.`);
        }

    }catch(error){
        console.error("BACKGROUND: Error during summary generation:", error);

    }

}

export async function GET(request: NextRequest) {

    console.log("API: Received GET request for data.");
    
    try{
        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get('page') || '1', 10) // here 10 resemble read string as decimal value
        const pageSize = parseInt(searchParams.get('pageSize') || '5', 10)
        const skip = (page - 1)*pageSize;


        // prisma transaction is used when you want to run more than one prisma queries together
        const [domainStatsFromDB, totalDomains] = await prisma.$transaction([


            prisma.domainStat.findMany({
            skip: skip,
            take: pageSize, //limit of 100 result
            include:{
                pageVisits: {
                    orderBy: { timeSpentSeconds: 'desc',},
                    take: 5, // Optionally limit items per domain shown  if we want to show limited pagevisits
                }
            },
            orderBy: {
                totalTimeSpentSeconds: 'desc',
            },
            
        }),
        prisma.domainStat.count()

        ])
        

        const timeDataResult: IncomingTimeData = {};
        for (const ds of domainStatsFromDB){
            timeDataResult[ds.name] = {
                totalTime: ds.totalTimeSpentSeconds,
                items: ds.pageVisits.map(pv => ({
                    url: pv.url,
                    title: pv.title ?? 'No title',
                    time: pv.timeSpentSeconds,
                    extractedText: pv.extractedText ?? "",
                    textExtractedAt: pv.textExtractedAt?.getTime() 
                })),
            };
        }

        const responseData = {
            timeData: timeDataResult,
            pagination:{
                currentPage: page,
                pageSize: pageSize,
                totalItems: totalDomains,
                totalPages: Math.ceil(totalDomains/pageSize),
            }
        };

        if (Object.keys(timeDataResult).length === 0 && page > 1){
            return NextResponse.json({message: "No more data available for this page.", data: {...responseData, timeData:{}},
                status:200,
                headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
                'Access-Control-Allow-Headers': 'Content-Type',
                }
            })
        }

        return NextResponse.json({message: "Data retrieved succesfully in GET", data: responseData},{
            status:200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        })


    }catch(error){

        console.error("API: Error retrieving data from database:", error);
        const errorMessage = error instanceof Error? error.message: "Wnknown error occured";
        return NextResponse.json({message: "Error retrieving data from database", error: errorMessage},{
            status: 500,
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });

    }


}

export async function OPTIONS(request: Request) {
    // OPTIONS handler remains the same for CORS preflight
    return NextResponse.json({ message: "CORS Preflight OK" }, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
// why option request is important: Before sending any post put delete first thing I should try the option request will ask is :
// hey server is it ok for me to send this kind of request to you for ex: which HHTP methos are allowed? Which headers can i send? who's allowed to access you?
// ifthe permission doesn;t meet there request will be blocked

//Need to watch later
//Libraries like Mozilla's Readability.js (the engine behind Firefox's reader mode) are excellent for this but add complexity to bundle into an extension.