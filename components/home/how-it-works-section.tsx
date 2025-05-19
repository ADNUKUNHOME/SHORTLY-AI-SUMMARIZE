import {
  BookOpenCheck,
  FileCheck2,
  MoveRight,
  PackageSearch,
} from "lucide-react";

type step = { icon: React.ReactNode; label: string; description: string };

const steps: step[] = [
  {
    icon: <FileCheck2 size={64} strokeWidth={1.5} />,
    label: "Upload PDF",
    description: "Upload your PDF to get started",
  },
  {
    icon: <PackageSearch size={64} strokeWidth={1.5} />,
    label: "AI Anlalysis",
    description: "Our advance AI analazes your document",
  },
  {
    icon: <BookOpenCheck size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Get a concise summary of your document    ",
  },
];

function StepItem({ icon, label, description }: step) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-700/50 transition-colors group w-full">
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-bt from-violet-700/10 to-transparent group-hover:from-violet-700/20 transition-colors">
          <div className="text-violet-700">{icon}</div>
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
          <h3 className="text-center font-bold text-xl">{label}</h3>
          <p className="text-center text-gray-600 text-s">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        {" "}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(50%-40.1875rem)] sm:w-[80.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.7% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-violet-700 mb-4 uppercase">
            how it works
          </h2>
          <h3 className="font-bold text-3xl mx-auto max-w-2xl mb-10">
            Transform any PDF into an easy to digest summary in three simple
            steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto relative">
            {steps.map((step, ind) => (
              <div key={ind} className="flex relative items-stretch">
                <StepItem {...step} />
                {ind < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <MoveRight
                      size={32}
                      strokeWidth={1}
                      className="text-violet-700"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}