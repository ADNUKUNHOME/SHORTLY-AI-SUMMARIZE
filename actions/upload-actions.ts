'use server';

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
            summary = await generateSummaryFromOpenAi(pdfText);
            console.log('summary from ai', { summary });
        } catch (error) {
            console.log(error);
        }

        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate Summary!',
                data: null
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