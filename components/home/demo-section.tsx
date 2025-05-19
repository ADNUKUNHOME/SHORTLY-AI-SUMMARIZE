export default function DemoSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 50.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.6% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Watch how <span className="text-teal-600">Brefe</span> transforms{" "}
          <br className="sm:hidden" />
          PDFs into{" "}
          <span className="text-rose-600 font-semibold">brief summaries</span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A beautiful demo of how your PDF content becomes easy to digest.
        </p>

        {/* Demo Card */}
        <div className="flex items-center justify-center px-2 sm:px-4 lg:px-6"></div>
      </div>
    </section>
  );
}