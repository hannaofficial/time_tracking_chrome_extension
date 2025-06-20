import { NextResponse } from 'next/server';
import { summarizeText } from '@/lib/summarizer';

// We only need to handle POST requests for this test endpoint.
export async function POST(request: Request) {
    try {
        // 1. Get the text from the request body.
        const body = await request.json();
        const { text } = body;

        // 2. Validate that the text was provided.
        if (!text || typeof text !== 'string' || text.trim().length === 0) {
            return NextResponse.json(
                { error: 'Please provide a non-empty "text" field in the request body.' },
                { status: 400 }
            );
        }

        console.log("TEST API: Received text for summarization...");
        const startTime = Date.now();

        // 3. Call your existing summarizer function.
        // The first time this runs, it will be slow because it has to download the model.
        // Subsequent calls will be much faster.
        const summary = await summarizeText(text);

        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000; // Duration in seconds

        console.log(`TEST API: Summary generated successfully in ${duration.toFixed(2)} seconds.`);

        // 4. Return the summary in the response.
        return NextResponse.json({
            originalText: text,
            summary: summary,
            durationInSeconds: duration,
        });

    } catch (error) {
        console.error("TEST API: Error during summarization test:", error);
        return NextResponse.json(
            { error: 'An unexpected error occurred while generating the summary.' },
            { status: 500 }
        );
    }
}


// to test the api endpoint
// curl -X POST http://localhost:3000/api/test-summary \
// -H "Content-Type: application/json" \
// -d '{
//   "text": "The James Webb Space Telescope (JWST) is a space telescope designed primarily to conduct infrared astronomy. As the largest optical telescope in space, its high resolution and sensitivity allow it to view objects too old, distant, or faint for the Hubble Space Telescope. This will enable a broad range of investigations across many fields of astronomy and cosmology, such as observation of the first stars and the formation of the first galaxies, and detailed atmospheric characterization of potentially habitable exoplanets. The telescope is a result of an international collaboration between NASA, the European Space Agency, and the Canadian Space Agency."
// }'