import Hero from "@/components/hero-home";
import TransformationSection from "@/components/transformation-section";
import CourseSections from "@/components/course-sections";

export const metadata = {
  title: "Rethink Forex | Understand Liquidity & Trade With Institutional Context",
  description:
    "A practical PDF course that teaches retail traders how institutions operate: liquidity requirements, position building, structure shifts, and profit-taking behavior — so you stop trading blind entries and start reading context.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TransformationSection />

      {/* =========================
          DIRECT-RESPONSE “MECHANISM” BLOCK (DARK, STRUCTURED, INSTITUTIONAL)
         ========================= */}
      <section className="relative overflow-hidden">
        {/* Dark background (same family as hero/transformation) */}
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute left-1/2 top-[-160px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-[10%] top-[35%] h-[360px] w-[360px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-14 md:py-20">
            {/* Headline + promise (mechanical, not psychological) */}
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold text-yellow-300/90">
                This is not “better entries.” It’s the missing context behind price.
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Institutions can’t trade whenever they want.
                <span className="text-white"> </span>
                <span className="relative inline-block font-black">
                  They need liquidity.
                  <span className="absolute inset-x-0 -bottom-1 h-3 rounded bg-yellow-400/70" />
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                Most retail education teaches you to “find a setup.” But institutions move size.
                To enter, exit, and take profits — they require opposing orders. This PDF shows
                you how to recognize those conditions using structure, not indicators.
              </p>

              {/* Quick CTA row */}
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://buy.stripe.com/28EfZg0WM6fi3ZTbMrdjO00"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
                >
                  Get the PDF — £25
                </a>

                <a
                  href="#whats-inside"
                  className="text-sm font-semibold text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
                >
                  See what’s inside
                </a>
              </div>

              <p className="mt-3 text-xs text-white/65">
                Educational content only. Trading involves risk. No guarantees.
              </p>
            </div>

            {/* Problem recognition (no shame, just pattern-recognition) */}
            <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                If this keeps happening…
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-white md:text-2xl">
                It’s not “random.” It’s usually a liquidity problem.
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  "Price breaks out — then snaps back through your entry.",
                  "Your stop gets hit… then price runs in your original direction.",
                  "A long trend keeps going until you join — then reverses.",
                  "News spikes hard — then retraces to where it started.",
                  "The clean ‘signal’ looks perfect… but you’re late anyway.",
                  "You win small, lose bigger — because context wasn’t on your side.",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-white/10 bg-slate-950/40 p-4 text-sm text-white/80"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits grid (ecom-style outcomes) */}
            <div className="mx-auto mt-10 max-w-6xl">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold text-white/60">Outcome</p>
                  <h3 className="mt-2 text-lg font-extrabold text-white">
                    Stop trading “entries”
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Learn to read where price is likely being positioned — so you’re not reacting
                    at the end of the move.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold text-white/60">Outcome</p>
                  <h3 className="mt-2 text-lg font-extrabold text-white">
                    Identify institutional “zones”
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Use structure to spot where large participation likely entered — and where
                    price may return if the position wasn’t fully built.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold text-white/60">Outcome</p>
                  <h3 className="mt-2 text-lg font-extrabold text-white">
                    Read profit-taking in real time
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Learn the structural signs of profit-taking (bigger retracements / structure
                    shifts) so you’re not surprised when momentum stalls.
                  </p>
                </div>
              </div>
            </div>

            {/* Mechanism (the “why it works”) */}
            <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/75">
                The mechanism
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                Institutions trade size.
                <span className="text-white/80"> </span>
                They need opposing orders to enter, exit, and take profits.
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm font-extrabold text-white">What retail is trained to do</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Chase continuation after a move</li>
                    <li>• Trade breakouts without context</li>
                    <li>• Treat structure as “noise”</li>
                    <li>• Focus on entries instead of positioning</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="text-sm font-extrabold text-white">What institutions must do</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>• Wait for liquidity to appear</li>
                    <li>• Build positions in stages (often largest first)</li>
                    <li>• Use structure shifts as exits / profit-taking</li>
                    <li>• Revisit zones if the position wasn’t completed</li>
                  </ul>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/85 md:text-base">
                The goal isn’t to “predict.” It’s to stop interpreting price as random and start
                interpreting it as a response to positioning and liquidity.
              </p>
            </div>

            {/* How it works (simple steps) */}
            <div className="mx-auto mt-10 max-w-5xl">
              <h3 className="text-center text-2xl font-extrabold text-white md:text-3xl">
                How you use this in real trading
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-4">
                {[
                  {
                    n: "1",
                    t: "Find the origin",
                    d: "Spot the start of a strong move (where participation likely entered).",
                  },
                  {
                    n: "2",
                    t: "Mark the zone",
                    d: "Box the structure area that generated the move (institutional interest).",
                  },
                  {
                    n: "3",
                    t: "Wait for return",
                    d: "If the position wasn’t completed, price often revisits to fill remaining orders.",
                  },
                  {
                    n: "4",
                    t: "Read the shift",
                    d: "Use structure changes to infer profit-taking / continuation / invalidation.",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur"
                  >
                    <p className="text-sm font-extrabold text-yellow-300/90">Step {s.n}</p>
                    <p className="mt-2 text-lg font-extrabold text-white">{s.t}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why choose us (direct-response differentiator) */}
            <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                Why this works where others didn’t
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                Most education teaches symptoms.
                <span className="text-white/80"> </span>
                This teaches the cause.
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm font-extrabold text-white">Typical trading courses</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• “Use this indicator / pattern”</li>
                    <li>• “Get better entries”</li>
                    <li>• “Fix your mindset first”</li>
                    <li>• More rules… without more context</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <p className="text-sm font-extrabold text-white">Rethink Forex</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>• Shows why liquidity is required</li>
                    <li>• Shows how positions are built in stages</li>
                    <li>• Shows how profit-taking appears in structure</li>
                    <li>• Gives you a repeatable way to read context</li>
                  </ul>
                </div>
              </div>

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
            </div>

            {/* Anchor for “See what’s inside” */}
            <div id="whats-inside" className="h-2" />
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