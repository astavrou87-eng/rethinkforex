import Hero from "@/components/hero-home";
import TransformationSection from "@/components/transformation-section";
import CourseSections from "@/components/course-sections";

export const metadata = {
  title: "Rethink Forex | PDF Course",
  description:
    "Rethink Forex is a practical PDF course designed to help retail traders trade with clarity, structure, and consistency.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TransformationSection />

      {/* =========================
          PREMIUM “ESSAY” REBUILD (DARK, STRUCTURED)
         ========================= */}
      <section className="relative overflow-hidden">
        {/* Dark background (same family as hero/transformation) */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute left-1/2 top-[-160px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-[10%] top-[35%] h-[360px] w-[360px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-14 md:py-20">
            {/* Top pull-quote */}
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold text-yellow-300/90">
                The problem isn’t discipline.
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                You’ve been trained to look at the market
                <span className="text-white"> </span>
                <span className="relative inline-block font-black">
                  from the wrong side.
                  <span className="absolute inset-x-0 -bottom-1 h-3 rounded bg-yellow-400/70" />
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                Most retail education teaches you to “find an entry.” But entries are the
                *end* of the decision — not the start. That’s why it keeps feeling like the
                market is hunting you.
              </p>
            </div>

            {/* 3-card argument */}
            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold text-white/70">What’s actually happening</p>
                <h3 className="mt-2 text-lg font-extrabold text-white">
                  You’re reacting where decisions are already finished
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Price has already moved. Liquidity has already been taken. The “signal” looks
                  clean — but you’re late by default.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold text-white/70">Why it feels personal</p>
                <h3 className="mt-2 text-lg font-extrabold text-white">
                  You blame yourself because the chart “should’ve worked”
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  When the method fails, the brain reaches for the nearest explanation:
                  “I’m undisciplined.” That shame loop is predictable.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold text-white/70">What fixes it</p>
                <h3 className="mt-2 text-lg font-extrabold text-white">
                  Context-first reading (before you’re emotionally involved)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  You stop hunting entries and start reading positioning:
                  where price is likely to pause, trap, and expand.
                </p>
              </div>
            </div>

            {/* The “shame / outcast” mechanism (tasteful but direct) */}
            <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm backdrop-blur">
              <h3 className="text-xl font-extrabold text-white md:text-2xl">
                “Being wrong” isn’t the painful part.
                <span className="text-white/80"> </span>
                <span className="text-white">
                  It’s feeling like you’re the only one who can’t do it.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                Most traders hide losses. They avoid telling friends. They avoid opening the
                account. Not because they’re weak — but because social shame is a primal signal:
                “I’m failing at something everyone else seems to handle.”
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm font-extrabold text-white">What retail training creates</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• You chase what already moved</li>
                    <li>• You get chopped in noise</li>
                    <li>• You internalise the failure</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="text-sm font-extrabold text-white">What “context-first” creates</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>• You wait for the same kinds of areas institutions care about</li>
                    <li>• You trade less, but with clarity</li>
                    <li>• You stop needing willpower to stay calm</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* “Responsibility without self-blame” anchor + CTA */}
            <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-7">
              <p className="text-sm font-semibold text-white/90">
                The point isn’t to protect your ego.
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                It’s to give you a model that makes your past losses make sense —
                <span className="text-white/80"> </span>
                without blaming you.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                That’s the mechanism:{" "}
                <span className="font-bold text-white">responsibility without self-blame</span>.
                You stay accountable — but you stop performing self-hate as a substitute for
                progress.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://buy.stripe.com/28EfZg0WM6fi3ZTbMrdjO00"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
                >
                  Get the PDF — £25
                </a>

                <a
                  href="/risk-disclaimer"
                  className="text-sm font-semibold text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
                >
                  Risk disclaimer
                </a>
              </div>

              <p className="mt-4 text-xs text-white/70">
                Educational content only. Trading involves risk. No guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth transition into the light section below */}
      <div className="h-20 bg-gradient-to-b from-slate-950 to-slate-50" />

      {/* Keep the rest of your page light (CourseSections currently assumes light UI) */}
      <section className="bg-slate-50">
        <CourseSections />
      </section>
    </>
  );
}