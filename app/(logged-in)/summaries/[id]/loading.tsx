'use client';

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function SummaryPageSkeleton() {
    return (
        <div className="relative isolate min-h-screen bg-gradient-to-b from-violet-50/40 to-white px-6">
            {/* Gradient Background (optional) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50/50 via-orange-50 to-transparent opacity-40" />

            <div className="max-w-4xl mx-auto py-12 lg:py-24 space-y-8">

                {/* Header Skeleton */}
                <div className="flex justify-between mb-6">
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-4">
                            <Skeleton className="h-8 w-24 rounded-full" />
                            <Skeleton className="h-4 w-28 rounded" />
                            <Skeleton className="h-4 w-20 rounded" />
                        </div>
                        <Skeleton className="h-10 w-3/4 rounded" />
                    </div>
                    <Skeleton className="h-9 w-32 rounded-full" />
                </div>

                {/* Source Info Skeleton */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-muted-foreground mb-12">
                    <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-violet-400" />
                        <Skeleton className="h-4 w-40" />
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="h-8 w-28 rounded" />
                        <Skeleton className="h-8 w-32 rounded" />
                    </div>
                </div>

                {/* Summary Viewer Skeleton */}
                <Card className="relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-violet-100">
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-muted-foreground bg-white/90 px-3 py-1.5 rounded-full shadow">
                        <FileText className="h-4 w-4 text-violet-400" />
                        <Skeleton className="h-4 w-16" />
                    </div>

                    {/* Simulated Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-muted/30 animate-pulse rounded-t-3xl z-20" />

                    {/* Scrollable Content */}
                    <div className="h-full overflow-y-auto pt-16 pb-24 px-4 sm:px-6 space-y-6">
                        <Skeleton className="h-8 w-1/2 mx-auto rounded" />
                        <div className="space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Skeleton key={i} className="h-20 w-full rounded-2xl" />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls Skeleton */}
                    <div className="absolute bottom-0 left-0 w-full px-4 pb-4 flex justify-between items-center">
                        <Skeleton className="h-10 w-24 rounded" />
                        <div className="flex gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Skeleton key={i} className="h-3 w-3 rounded-full" />
                            ))}
                        </div>
                        <Skeleton className="h-10 w-24 rounded" />
                    </div>
                </Card>
            </div>
        </div>
    );
}
