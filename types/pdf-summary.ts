export interface PdfSummaryType {
    userId?: string;
    fileUrl: string;
    summary: string;
    status?: string;
    title: string;
    fileName: string;
}

export interface StorePdfSummarySuccess {
    success: true;
    message: string;
    data: {
        id: string;
    }
}

export interface StorePdfSummaryFailure {
    success: false;
    message: string;
}

export type StorePdfSummaryResult = StorePdfSummarySuccess | StorePdfSummaryFailure;


export type Summary = {
    id: string;
    title: string | null;
    summary_text: string;
    status: string;
    created_at: string;
    origingal_file_url: string;
};
