import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4lx md:text-5xl">
              Ready to save hours of reading time?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transform lengthy ducs into clear, actionable insights with our AI
              -powered summarizer
            </p>
          </div>
          <div className="flex flex-col min-[400]:flex-row gap-2 justify-center">
            <div>
              <Button
                size={"lg"}
                variant={"link"}
                className="w-full min-[400px]:w-auto flex items-center justify-center bg-linear-to-r from-slate-950 to-violet-700 hover:from-violet-700 hover:to-slate-900 hover:text-white text-white transition-all duration-300
                "
              >
                <Link
                  href={"#pricing"}
                  className="flex items-center justify-center px-6 py-6"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 animate-pulse ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}