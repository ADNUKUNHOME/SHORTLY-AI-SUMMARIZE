'use client';

import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionH1 } from "../common/motion-wrapper";
import { AnimatePresence } from "motion/react";

const dummySections = [
    {
        title: "Quick Over View",
        points: [
            "📄 Get a fast summary of your entire document in just seconds.",
            "📌 Ideal for scanning content without reading the full PDF."
        ]
    },
    {
        title: "Document Details",
        points: [
            "📝 File type, length, and structure info at a glance.",
            "📅 Includes document creation date and author (if available).",
            "📂 Extracted metadata and source reliability insights."
        ]
    },
    {
        title: "Key Highlights",
        points: [
            "⭐ Core ideas and arguments captured clearly.",
            "🧭 Focus on paragraphs with the highest information density.",
            "📍Important examples or data points are summarized."
        ]
    },
    {
        title: "Why it matters",
        points: [
            "🎯 Understand the real-world relevance of this content.",
            "🌐 Links to broader concepts or current trends.",
            "⚠️ Shows urgency or impact if the topic is time-sensitive."
        ]
    },
    {
        title: "Main Points",
        points: [
            "🔑 Bullet-pointed breakdown of essential arguments.",
            "🧠 Simplified interpretation of technical terms.",
            "🗂️ Grouped by themes or sections for easier recall."
        ]
    },
    {
        title: "Pro tips",
        points: [
            "💡 Expert takeaways to better understand or apply the material.",
            "🔍 Tips for digging deeper or expanding the topic.",
            "🎓 Study hacks or cross-references included."
        ]
    },
    {
        title: "Key terms to know",
        points: [
            "📘 Glossary of must-know terms from the document.",
            "🧾 Includes definitions and real usage examples.",
            "🔗 Highlights terms tied to core concepts."
        ]
    },
    {
        title: "Bottom line",
        points: [
            "✅ Final takeaway in plain language.",
            "🧭 What to do next with this information.",
            "📢 One-liner you can quote or share easily."
        ]
    }
];



export default function DemoContents() {
    const [currentSection, setCurrentSection] = useState(0);

    const onNext = () => {
        if (currentSection < dummySections.length - 1) {
            setCurrentSection((prev) => prev + 1);
        }
    }

    const onPrev = () => {
        if (currentSection > 0) {
            setCurrentSection((prev) => prev - 1);
        }
    }

    const section = dummySections[currentSection];
    return (
        <Card className="relative flex flex-col px-4 py-6 mx-auto gap-4 w-full sm:w-[300px] md:w-xl lg:w-[600px] sm:h-auto lg:h-[600px] overflow-hidden rounded-xl shadow-xl hover:shadow-2xl">
            {/* progress bar */}
            <div className="px-4 flex gap-1.5">
                {dummySections.map((_, index) => (
                    <div
                        key={index}
                        className="h-1.5 flex-1 rounded-full bg-rose-500/10 overflow-hidden"
                    >
                        <div
                            className={cn(
                                'h-full bg-linear-to-r from-gray-500 to-rose-600 transition-all duration-500',
                                index === currentSection
                                    ? 'w-full'
                                    : currentSection > index
                                        ? 'w-full opacity-10'
                                        : 'w-0'
                            )}
                        />
                    </div>
                ))}
            </div>
            {/* contents of the section */}
            <AnimatePresence mode="wait">
                <MotionH1
                    key={section.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl sm:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 my-12 sm:my-4 lg:my-12">
                    {section.title}
                </MotionH1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <MotionDiv
                    key={currentSection}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4 flex-grow"
                >
                    {section.points.map((point, idx) => (
                        <MotionDiv
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * idx }}
                            className="text-base sm:text-sm lg:text-base font-bold flex border border-gray-200 shadow-lg min-h-12 sm:min-h-auto lg:min-h-12 h-auto rounded-2xl w-full items-center p-5"
                        >
                            ⮞ {point}
                        </MotionDiv>
                    ))}
                </MotionDiv>
            </AnimatePresence>

            {/* navigation buttons and progress dots */}

            <div className="flex items-center justify-between px-3 pt-4 bottom-0 mt-auto h-16 border-t">
                <Button
                    variant={'ghost'}
                    size={'icon'}
                    onClick={onPrev}
                    disabled={currentSection === 0}
                    className="flex items-center justify-center rounded-full  w-12 h-12 transition-all duration-200  bg-violet-700 hover:bg-violet-800 text-white"
                >
                    <ChevronLeft className="w-4 h-4 text-white" />
                </Button>
                <div className="flex gap-1">
                    {
                        dummySections.map((_, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    'w-3 h-3 rounded-full',
                                    idx === currentSection ? 'bg-violet-700'
                                        : 'bg-muted/30'
                                )}
                            />
                        ))
                    }
                </div>
                <Button
                    variant={'ghost'}
                    size={'icon'}
                    onClick={onNext}
                    disabled={currentSection === dummySections.length - 1}
                    className="flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full bg-violet-700 hover:bg-violet-800 text-white"
                >
                    <ChevronRight className="w-4 h-4 text-white" />
                </Button>
            </div>
        </Card>
    )
}