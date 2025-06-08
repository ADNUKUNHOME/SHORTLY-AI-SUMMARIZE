'use server';

import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAi } from "@/lib/openai";

export async function generatePdfSummary(uploadResponse: [{
    serverData: {
        userId: string;
        file: {
            url: string;
            name: string;
        };
    }
}]) {
    if (!uploadResponse) {
        return {
            success: false,
            message: "File Upload Failed!",
            data: null,
        }
    }

    const {
        serverData: {
            userId,
            file: { url: pdfUrl, name: fileName },
        }
    } = uploadResponse[0];

    if (!pdfUrl) {
        return {
            success: false,
            message: "File Upload Failed!",
            data: null,
        }
    }

    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log('pdfText', pdfText);

        let summary;
        try {
            summary = await generateSummaryFromGemini(pdfText);
            console.log('summary from ai', { summary });
        } catch (error) {
            console.log(error);
            //call Gemin ai
            if (error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
                try {
                    summary = await generateSummaryFromOpenAi(pdfText);
                } catch (geminiError) {
                    console.error(
                        'Gemini API failed after openAI quote exceeded',
                        geminiError
                    );
                    throw new Error(
                        'Failed to generate summary with available AI providers!'
                    )
                }
            }
        }

        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate Summary!',
                data: null
            }
        }

        return {
            success: true,
            message: 'Summary Generated Successfully',
            data: {
                summary,
            }
        }
    } catch (err) {
        return {
            success: false,
            message: "File Upload Failed!",
            data: null,
        }
    }
}