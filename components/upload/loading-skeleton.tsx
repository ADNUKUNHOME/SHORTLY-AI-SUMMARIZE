'use client';

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function LoadingSkeleton() {
    const dummySections = Array(5).fill(null);
    const currentSection = 0;

    return (
        <Card className="relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full xl:w-[600px] overflow-hidden bg-gradient-to-br from-background via-background/95 to-violet-500/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-violet-500/10">
            {/* Progress Bar Skeleton */}
            <div className="absolute top-0 left-0 w-full h-2 bg-muted/30 animate-pulse rounded-t-3xl z-20" />

            {/* Scrollable Content Area */}
            <div className="h-full overflow-y-auto pt-12 sm:pt-16 pb-20 sm:pb-24 px-4 sm:px-6">
                {/* Section Title Skeleton */}
                <div className="flex flex-col ga-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/90 backdrop-blur-xs z-10">
                    <div className="h-8 sm:h-10 w-2/3 mx-auto bg-muted/30 rounded animate-pulse" />
                </div>

                {/* Content Skeleton */}
                <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-4 w-full bg-muted/30 rounded animate-pulse",
                                i % 2 === 0 ? "w-11/12" : "w-10/12"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Controls Skeleton */}
            <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 pb-4 flex justify-between items-center z-10">
                <Button disabled className="h-10 w-20 bg-muted/30 animate-pulse" />
                <div className="flex gap-1">
                    {dummySections.map((_, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "h-3 w-3 rounded-full",
                                idx === currentSection
                                    ? "bg-muted/50 animate-pulse"
                                    : "bg-muted/30 animate-pulse"
                            )}
                        />
                    ))}
                </div>
                <Button disabled className="h-10 w-20 bg-muted/30 animate-pulse" />
            </div>
        </Card>
    );
}
