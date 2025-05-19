import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <div className="relative overflow-hidden p-0.5 rounded-full text-white animate-gradient-x flex items-center gap-2 shadow-md">
            <Badge
              variant={"secondary"}
              className="relative px-3 md:px-4 py-1 text-base font-medium bg-white hover:bg-linear-to-r from-violet-200 to-violet-600 rounded-full group-hover:bg-gray-50 transition-colors duration-200"
            >
              <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-violet-700 animate-pulse mr-2" />
              <p className="text-sm font-semibold md:text-base text-violet-700">
                Powered by AI
              </p>
            </Badge>
          </div>
        </div>
        <h1 className="font-bold text-4xl md:text-5xl py-6 text-center">
          Transform PDFs Into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-2">Brief</span>
            <span
              className="absolute inset-0 bg-violet-200/50 -rotate-2 rounded-lg transform -skew-y-1"
              area-hidden="true"
            ></span>
          </span>{" "}
          Summaries
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
          Get an incredible short hands of your documents in seconds
        </p>
        <div>
          <Button
            variant={"link"}
            className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-4 md:py-7 lg:mt-16 bg-linear-to-r from-slate-900 to-violet-700 hover:from-violet-700 hover:to-slate-900 hover:no-underline font-bold shadow-lg transitoion-all duration-300"
          >
            <Link href="#pricing" className="flex gap-2 items-center">
              <span>Try Brefe</span>
              <ArrowRight className="animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}