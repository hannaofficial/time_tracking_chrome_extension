'use client'
import React, { useCallback } from "react";
import { useEffect, useState, useRef } from "react";
// import { useSearchParams } from "next/navigation";


//const colors = ["#60A5FA", "#34D399", "#FBBF24", "#F472B6", "#A78BFA", "#F87171", "#38BDF8"];

interface pageItem {
  url: string;
  title: string;
  time: number;
  extractedText?: string;
  textExtractedAt?: number;
}

interface DomainData {
  totalTime: number;
  items: pageItem[];
}

interface TransformedTImeData {
  [domain: string]: DomainData
}

interface PaginationMeta {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
interface ApiDataload {
  timeData?: TransformedTImeData;
  pagination?: PaginationMeta

}

interface ApiGetResponse {
  message: string;
  data? : ApiDataload;
  error?: string;
}

const getFaviconUrl = (domain: string) => {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
}

const formatTime = (ms: number) => {
    const seconds = ms / 1000;
    if (seconds < 60) return `${seconds.toFixed(1)}s`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${minutes.toFixed(1)}m`;
    const hours = minutes / 60;
    return `${hours.toFixed(1)}h`;
};


const HistoryAnalysisPage = () => {

    // const searchParams = useSearchParams();
    // const historyDataParams = searchParams.get('historyData');

  const [domains, setDomains] = useState<[string, DomainData][]>([]);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPolling, setIspolling] = useState(false)

  const pollingIntervalRef = useRef<NodeJS.Timeout>(null);
  //Polling is a technique where a client sends periodic HTTP requests at regular intervals 
  // (like every 5 seconds) to the server, to check if new or updated data is available.
  // It is usually done with a setInterval(()=>{fetch(), }, 5000)
  const PAGE_SIZE = 5;

  const fetchData = useCallback(async (pageToFetch: number, stopPollingOnSuccess: boolean = true) => {
// Wrapping the function in useCallback so it doesn’t get re-created every render
//Memoizes a function to prevent re-creation unless dependencies change
    setLoading(true);
    setError(null);
    console.log(`Fetching data for page: ${pageToFetch}, stopPollingOnSuccess: ${stopPollingOnSuccess}`);
    try {
      const response = await fetch(`/api/data?page=${pageToFetch}&pageSize=${PAGE_SIZE}`);
      const result: ApiGetResponse = await response.json();

      if (!response.ok || result.error) {
        setError(`API Error: ${result.message || result.error || response.statusText}`);
        // setDomains([]);
        // setPagination(null)
        if (stopPollingOnSuccess) setIspolling(false)
        
        return false;
      } 
      
      if(result.data?.timeData && Object.keys(result.data.timeData).length > 0){
      
        const sortedDomains = Object.entries(result.data.timeData).sort(([,a],[,b])=> b.totalTime - a.totalTime);
        setDomains(sortedDomains);
        setPagination(result.data.pagination || null);
        if(stopPollingOnSuccess) setIspolling(false);
        return true;
      }else if (
        result.message === "No data received yet." ||
        (result.data && Object.keys(result.data.timeData ?? {}).length === 0 && pageToFetch === 1)
      ){
        console.log("No domain data yet, will poll if first fetch.")
        setDomains([]);
        setPagination(null);
        // if (pageToFetch === 1 && !isPolling){
        //   setIspolling(true);
        // }  // Don't set isPolling here, let the calling useEffect decide
        return false;
      }else if (result.data && Object.keys(result.data.timeData ??  {}).length === 0 && pageToFetch > 1){
        console.log("No more domains for this page.");
        setDomains([]);
        setPagination(result.data.pagination || null);
        if(stopPollingOnSuccess)  setIspolling(false);
        
        return true;
      }else{

        // Unexpected: API success but no timeData or pagination, or unknown message
        console.warn("Unexpected API response:", result);
        setError("Received unexpected data from API");
        
        if (stopPollingOnSuccess) {
        setIspolling(false);}
        return false;


      }
    }catch(err:any){

      console.error("Fetch error:", err);
      setError(`Failed to fetch data: ${err.message}`);
      // setDomains([]);
      // setPagination(null);
      if (stopPollingOnSuccess) setIspolling(false);
      return false

    }finally{

      setLoading(false);

    }

  }, []) // // Removed isPolling from dependencies. fetchData is now stable unless PAGE_SIZE changes (which it won't).
 

  // useEffect
useEffect(() => {
  console.log("Initial load effect triggered.");
  fetchData(1, true).then(success => {
    if(!success){
      console.log("Initial fetch for page 1 had no data. Setting up to poll.");
      setIspolling(true);
    }
  })
}, [fetchData]); // Runs when fetchData is first created
 
// Effect for fetching data when currentPage changes
 useEffect(() => {
  console.log(`currentPage effect triggered: ${currentPage}`);
  setIspolling(false);
  fetchData(currentPage, true); // true to stop polling if succesful
 }, [currentPage, fetchData]);

 //  Effect to manage the polling interval based on isPolling state

 useEffect(() => {

  if(isPolling ){
    console.log("Polling is active, setting interval.");
    if (pollingIntervalRef.current) clearInterval(pollingIntervalRef.current); // Clear any exisiting

    pollingIntervalRef.current = setInterval(()=> {
      console.log("Polling tick: fetching page 1");
      fetchData(1, true); // Poll page 1, stop polling if data found
    }, 5000);
  }else {
    console.log("Polling is inactive, clear interval.");
    if(pollingIntervalRef.current){
    clearInterval(pollingIntervalRef.current);
    pollingIntervalRef.current = null;
                                  }
  }
  return ()=>{ // Cleanup when component unmounts or isPolling changes
    if(pollingIntervalRef.current){
      clearInterval(pollingIntervalRef.current);  //This is actually a cleanup function
      pollingIntervalRef.current = null;
      console.log("Polling interval cleared in clean up (isPolling effect)")
    }
  }

 }, [isPolling, fetchData]);

 const handleNextPage = () => {
  if (pagination && currentPage < pagination.totalPages){
    setCurrentPage(prev => prev + 1)
  }
 }

 const handlePrevPage = () => {
  if (currentPage > 1){
    setCurrentPage(prev => prev - 1)
   }
  };

  if(loading && domains.length === 0 && !error && currentPage === 1){
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
                <p className="text-xl text-gray-400">Loading domain insights...</p>
            </div>
    )
  }

  if(isPolling && domains.length === 0 && !error && !loading){
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
                 <p className="text-xl text-gray-400">Waiting for browsing data from extension...</p>
      </div>
    )
  }

  const ConvertTimeToIndia2 = (timeStamp: number | undefined):string =>{

    if (!timeStamp) {
    return 'No date provided';
  }
    var date = new Date(timeStamp);
    var Time = date.getTime();
    var TimeIST = new Date(Time)
    TimeIST.setHours(TimeIST.getHours() + 5);
    TimeIST.setMinutes(TimeIST.getMinutes() + 30);

    return TimeIST.toString()
    
  }
const ConvertTimeToIndia = (timeStamp: string | number | Date | undefined): string => {
  // 1. Handle cases where the timestamp might not exist.
  if (!timeStamp) {
    return 'No date provided';
  }

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata', // Use the standard IANA time zone for India
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Use AM/PM format
  };

  // 2. Create a date and return a formatted string directly.
  return new Date(timeStamp).toLocaleString('en-IN', options);
};
    
      

  return (
    <div className="min-h-screen relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-[shimmer_4s_infinite] bg-gradient-to-br from-purple-900 via-black to-blue-900 flex flex-col items-center pt-10 pb-20 px-4">
            <div className=" bg-white/1 backdrop-blur-2xl rounded-2xl  shadow-[0px_0px_0px_#000000] p-6 md:p-8 w-full max-w-2xl text-white ">
                <h1 className="text-3xl font-bold mb-6 text-center">🌐 Domain Time Insights</h1>

                {error && <p className="text-center text-red-400 mb-4">Error: {error}</p>}
                
                {!loading && !error && domains.length === 0 && !isPolling && (
                    <p className="text-center text-gray-400">No domain data available for this page, or no data has been sent by the extension yet.</p>
                )}

                {domains.length > 0 && (
                    <div className="space-y-4">
                        {domains.map(([domain, data]) => (
                            <div key={domain} className="bg-white/5 p-4 rounded-lg flex items-center space-x-4">
                                <img
                                    src={getFaviconUrl(domain)}
                                    alt={`${domain} favicon`}
                                    className="w-8 h-8 rounded-full flex-shrink-0"
                                    onError={(e) => (e.currentTarget.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')} // Fallback for broken favicon
                                />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-lg truncate" title={domain}>{domain}</h3>
                                    {/* Optional: Show top page or more details */}
                                    {data.items && data.items.length > 0 && (
                                      <>
                                        <p className="text-xs text-gray-400 truncate" title={data.items[0].title}>
                                            Top page: {data.items[0].title || 'No Title'} ({formatTime(data.items[0].time)})
                                        </p>
                                        <p className="text-xs text-gray-400 truncate" title={data.items[0].textExtractedAt?.toString()}>
                                                      Content was consume at {  ConvertTimeToIndia(data.items[0].textExtractedAt )
                                                        }
                                        </p>
                                      </>
                                        
                                    )}
                                </div>
                                <div className="text-lg font-medium whitespace-nowrap">
                                    {formatTime(data.totalTime)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {pagination && pagination.totalPages > 1 && (
                    <div className="mt-8 flex justify-between items-center">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1 || loading}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Previous
                        </button>
                        <span className="text-gray-300">
                            Page {pagination.currentPage} of {pagination.totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === pagination.totalPages || loading}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Next
                        </button>
                    </div>
                )}
                 {loading && domains.length > 0 && <p className="text-center text-gray-400 mt-4">Loading next page...</p>}
            </div>
        </div>
);
}

export default HistoryAnalysisPage;



// Extra code


// below code was used when there was continuously datafetching even if the data was not changed


    // Memoize receivedHistoryData using useMemo
    // const receivedHistoryData = React.useMemo(() => {
    //     if (historyData) {
    //         try {
    //             return historyData;
    //         } catch (error) {
    //             console.error("Error parsing historyData from URL:", error);
    //             return [];
    //         }
    //     } else {
    //         return [];
    //     }
    // }, [historyData]);
    
    // Dependency array for useMemo is historyDataParams
    // useMemo will only re-run if historyDataParam string changes


{/* Chart Section - Uncomment and integrate your chart library (like Recharts) here */}
                                   {/*<h3 className="text-lg font-semibold mb-4">Visual Chart:</h3>
                                   <div className="bg-white/5 rounded-xl p-4">
                                       <ResponsiveContainer width="100%" height={300}>
                                           <BarChart data={chartData}>
                                               <XAxis dataKey="name" stroke="#ddd" />
                                               <YAxis stroke="#ddd" />
                                               <Tooltip />
                                               <Bar dataKey="visits">
                                                   {chartData.map((entry, index) => (
                                                       <Cell key={`cell-${index}`} fill={entry.fill} />
                                                   ))}
                                               </Bar>
                                           </BarChart>
                                       </ResponsiveContainer>
                                   </div>*/}

    // Prepare data for the chart
        // const chartData = Object.entries(categorizedData || {}).map(([topic, count], index) => ({
        //   name: topic,
        //   visits: count,
        //   fill: colors[index % colors.length],
        // }));