'use server';

import { getDbConnection } from "@/lib/db";
import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAi } from "@/lib/openai";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface PdfSummaryType {
    userId?: string;
    fileUrl: string;
    summary: string;
    status?: string;
    title: string;
    fileName: string;
}

export async function generatePdfSummary({
    fileUrl,
    fileName
}: {
    fileUrl: string;
    fileName: string;
}) {
    if (!fileUrl) {
        return {
            success: false,
            message: "File Upload Failed!",
            data: null,
        }
    }


    if (!fileUrl) {
        return {
            success: false,
            message: "File Upload Failed!",
            data: null,
        }
    }

    try {
        const pdfText = await fetchAndExtractPdfText(fileUrl);
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

        const formattedFileName = formatFileNameAsTitle(fileName);

        return {
            success: true,
            message: 'Summary Generated Successfully',
            data: {
                title: fileName,
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

async function savePdfSummary({
    userId,
    fileUrl,
    summary,
    status,
    title,
    fileName
}: PdfSummaryType) {
    try {
        const sql = await getDbConnection();
        const [savedSummary] = await sql`
         INSERT INTO pdf_summaries(
            user_id,
            original_file_url,
            summary_text,
            status,
            title,
            file_name
        ) VALUES(
            ${userId},
            ${fileUrl},
            ${summary},
            ${status},
            ${title},
            ${fileName}
        ) RETURNING id, summary_text;
        `
        return savedSummary;

    } catch (error) {
        console.error('Error saving PDF summary', error);
        throw error;
    }
}

export async function storePdfSummaryAction({
    fileUrl,
    summary,
    status,
    title,
    fileName
}: PdfSummaryType) {
    //user is logged in and has a userId

    //save PDF summary
    let savedSummary: any;
    try {
        const { userId } = await auth();
        if (!userId) {
            return {
                success: false,
                message: 'User not found!'
            }
        }
        savedSummary = await savePdfSummary({
            userId,
            fileUrl,
            summary,
            status,
            title,
            fileName
        });

        if (!savedSummary) {
            return {
                success: false,
                message: 'Failed to save PDF summary, Please try again...'
            }
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Error saving PDF summary'
        }
    }

    //Revalidate cache

    revalidatePath(`/summaries/$${savedSummary.id}`);

    return {
        success: true,
        message: 'PDF Summary is saved successfully',
        data: {
            id: savedSummary.id,
        }
    }

}