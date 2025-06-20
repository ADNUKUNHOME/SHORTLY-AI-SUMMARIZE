'use client'

import { useState } from "react";
import { Card } from "../ui/card";
import { NavigationControls } from "./navigation-controls";
import ProgressBar from "./progress-bar";
import { parseSection } from "@/utils/summary-helper";
import ContentSection from "./content-section";

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col ga-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/90 backdrop-blur-xs z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-center flex justify-center items-center gap-2">
                {title}
            </h2>
        </div>
    )
}

export function SummaryViewer({ summary }: { summary: string }) {
    if (!summary?.trim()) {
        return <p className="text-center text-muted-foreground">No summary available.</p>;
    }

    const [currentSection, setCurrentSection] = useState(0);

    const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    const handlePrevious = () => setCurrentSection((prev) => Math.max(prev - 1, 0));

    const sections = summary
        .split('\n# ')
        .map((section) => section.trim())
        .filter(Boolean)
        .map(parseSection);

    return (
        <Card className="relative px-2 h-[500px] sm:h-[600px] lg:h-[700px] w-full xl:w-[600] overflow-hidden bg-linear-to-br from-background via-background/95 to-violet-500/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-violet-500/10">
            <ProgressBar
                sections={sections}
                currentSection={currentSection}
            />
            <div className="h-full overflow-y-auto scorllbar-hide pt-12 sm:pt-16 pb-20 sm:pb-24">
                <div className="px-4 sm:px-6">
                    <SectionTitle title={sections[currentSection]?.title || ''} />
                    <ContentSection
                        title={sections[currentSection]?.title || ''}
                        points={sections[currentSection]?.points || []}
                    />
                </div>
            </div>
            <NavigationControls
                currentSection={currentSection}
                totalSections={sections.length}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onSectionSelect={setCurrentSection}
            />
        </Card >
    );
}
