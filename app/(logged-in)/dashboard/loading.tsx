'use client';

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MotionDiv } from "@/components/common/motion-wrapper";
import { itemsVarients } from "@/utils/constants";

export default function DashboardSkeleton() {
    return (
        <main className="min-h-screen">
            {/* Optional: Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-violet-500/5" />

            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col mx-12"
            >
                {/* Top Heading and Button */}
                <div className="flex justify-between py-12 sm:py-14">
                    <div className="flex flex-col gap-4">
                        <Skeleton className="h-10 w-64 rounded" />
                        <Skeleton className="h-6 w-80 rounded" />
                    </div>
                    <Skeleton className="h-10 w-40 rounded" />
                </div>

                {/* Optional: Plan Limit Notice Skeleton */}
                <Skeleton className="h-16 w-full mb-6 rounded-lg" />

                {/* Summary Cards Grid Skeleton */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <MotionDiv
                            key={idx}
                            variants={itemsVarients}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Card className="relative h-full p-4 sm:p-6">
                                {/* Delete Button Position */}
                                <div className="absolute top-2 right-2">
                                    <Skeleton className="h-6 w-6 rounded-full" />
                                </div>

                                <div className="flex flex-col gap-4 mt-2">
                                    {/* File icon + title + time */}
                                    <div className="flex items-start gap-4">
                                        <Skeleton className="h-8 w-8 rounded" />
                                        <div className="flex-1">
                                            <Skeleton className="h-4 w-3/4 mb-2" />
                                            <Skeleton className="h-3 w-1/2" />
                                        </div>
                                    </div>

                                    {/* Summary preview text */}
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />

                                    {/* Status badge */}
                                    <div className="mt-2">
                                        <Skeleton className="h-6 w-20 rounded-full" />
                                    </div>
                                </div>
                            </Card>
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>
        </main>
    );
}
