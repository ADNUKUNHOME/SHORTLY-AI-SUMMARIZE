import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function EmptySummaryState() {
    return (
        <div className="text-center py-12">
            <div className="flex flex-col items-center gap-4">
                <FileText className="w-16 h-16 text-violet-400" />
                <h2 className="text-xl font-semibold text-gray-600">No Summaries Yet</h2>
                <p className="text-gray-500 max-w-md">Upload your first summary with AI-Powered summaries</p>
                <Link href="/upload">
                    <Button
                        variant={'link'}
                        className="mt-4 text-gray-50 bg-linear-to-r from-violet-500 to-violet-800 hover:from-violet-800 hover:to-violet-500 hover:no-underline">
                        Create Your First Summary
                    </Button>
                </Link>
            </div>
        </div>
    )
}