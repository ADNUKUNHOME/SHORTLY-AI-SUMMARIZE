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