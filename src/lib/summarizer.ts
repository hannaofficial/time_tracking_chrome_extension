import {pipeline, Pipeline} from '@xenova/transformers'

class SummarizationPipeline {

    static task = 'summarization';
    static model = 'Xenova/distilbart-cnn-6-6';
    static instance :Pipeline | null = null;

    // static function or variable cannot be called on instance
    // look down for the concept
   // progress callback is giving you the current feedback of the status of the downlaoding of the model
    static async getInstance(progress_callback?: Function){
        if(this.instance === null ){

            this.instance = await pipeline(this.task as any , this.model, { progress_callback });
            // If PipelineType is exported, use: 
            // import type { PipelineType } from '@xenova/transformers';
            // this.instance = await pipeline('summarization' as PipelineType, this.model, { progress_callback });
        }
        return this.instance;
    }


}

export async function summarizeText(text: string): Promise<string>{


    try{
        const summarizer = await SummarizationPipeline.getInstance();
        

        const cleanedText = text.replace(/\s+/g, ' ').trim();
        if(cleanedText.length < 100){
            return "Content was too short to summarize.";
        }

        if (!summarizer) {
            throw new Error("Summarizer pipeline failed to initialize.");
        }

        const output = await summarizer(cleanedText, {
            max_new_tokens: 100,
            min_new_tokens: 30,
        })

        return output[0].summary_text;

    }catch(error){

        console.error("Error during summarization:", error);
        return "failed to generate a summary"

    }

}













// class Calculator {

//     static PI = 3.14159;

//     static add(x, y) {
//         return x + y;
//     }
// }

// Call directly on the class
// console.log(Calculator.PI);          // Output: 3.14159
// console.log(Calculator.add(5, 3));   // Output: 8

// You CANNOT call them on an instance
// const myCalc = new Calculator();
// console.log(myCalc.PI); // undefined
// myCalc.add(5, 3);      // TypeError: myCalc.add is not a function