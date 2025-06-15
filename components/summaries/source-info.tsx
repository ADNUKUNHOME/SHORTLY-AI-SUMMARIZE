import { ExternalLink, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { DownloadSummaryButton } from "./download-summary-button";

export default function SourceInfo({
    fileName,
    originalFileUrl,
    summaryText,
    title,
    createdAt
}: {
    fileName: string;
    originalFileUrl: string;
    summaryText: string;
    title: string;
    createdAt: string;
}) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Source: {fileName}</span>
            </div>
            <div className="flex gap-2">
                <Button
                    variant={'ghost'}
                    size={'sm'}
                    className="h-8 px-3 text-violet-600 hover:text-violet-700 hover:bg-violet-50"
                    asChild>
                    <a
                        href={originalFileUrl}
                        target="_blank"
                        rel="noopener norefferer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Original
                    </a>
                </Button>
                <DownloadSummaryButton
                    fileName={fileName}
                    title={title}
                    summaryText={summaryText}
                    createdAt={createdAt}
                />
            </div>
        </div>
    )
}