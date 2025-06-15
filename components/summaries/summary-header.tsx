import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar, ChevronLeft, Clock, Sparkle } from "lucide-react";
import { Badge } from "../ui/badge";

export default function SummaryHeader({ title, createdAt, readingTime }: { title: string, createdAt: string, readingTime: number }) {
    return (
        <div className="flex gap-4 justify-between mb-4">
            <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                    <Badge variant={'secondary'}
                        className="relative px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-xs rounded-full hover:bg-white/90 transitoin-all dudration-200 shadow-xs hover:shadow-md">
                        <Sparkle className="w-4 h-4 mr-1.5 text-violet-500" />
                        AI Summary
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-violet-500" />
                        {new Date(createdAt).toLocaleDateString('en-US', {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-violet-500" />
                        {readingTime} min read
                    </div>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight">
                    <span className="bg-linear-to-r from-violet-600 to-black bg-clip-text text-transparent">{title}</span>
                </h1>
            </div>
            <div className="self-start">
                <Link href='/dashboard'>
                    <Button
                        variant={'link'}
                        className="group flex gap-1 sm:gap-2 items-center hover:bg-white/80 backdrop-blur-xs rounded-full transition-all duration-200 shadow-xs hover:shadow-md border border-violet-100/40 bg-violet-100 px-2 sm:px-3"
                    >
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500 transition-transform group-hover:translate-x-0.5" />
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">Back <span className="hidden sm:inline"> to dashboard</span></span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}