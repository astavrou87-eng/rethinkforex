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
          DARK CORE SECTION
         ========================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute left-1/2 top-[-160px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-[10%] top-[35%] h-[360px] w-[360px] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-14 md:py-20">

            {/* Pattern recognition */}
            <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                If this keeps happening…
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-white md:text-2xl">
                It’s rarely random. It’s usually liquidity.
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  "Price breaks out — then snaps back through your entry.",
                  "Your stop gets hit… then price runs in your original direction.",
                  "A strong trend reverses right after you join.",
                  "News spikes hard — then retraces to the origin.",
                  "The ‘perfect’ setup works… until you take it.",
                  "You win small, lose bigger — because context was off.",
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

            {/* Outcome grid */}
            <div className="mx-auto mt-10 max-w-6xl">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h3 className="text-lg font-extrabold text-white">
                    Stop trading entries in isolation
                  </h3>
                  <p className="mt-3 text-sm text-white/80">
                    Start filtering trades based on positioning and liquidity, not signals.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h3 className="text-lg font-extrabold text-white">
                    Identify where size likely entered
                  </h3>
                  <p className="mt-3 text-sm text-white/80">
                    Mark zones where institutions probably built positions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <h3 className="text-lg font-extrabold text-white">
                    Recognise profit-taking early
                  </h3>
                  <p className="mt-3 text-sm text-white/80">
                    Spot structure shifts that suggest distribution or exits.
                  </p>
                </div>
              </div>
            </div>

            {/* 4-BOX MECHANISM STRIP */}
            <div className="mx-auto mt-14 max-w-6xl">
              <h3 className="text-center text-2xl font-extrabold text-white md:text-3xl">
                How price actually moves
              </h3>

              <div className="mt-8 grid gap-6 md:grid-cols-4">
                {[
                  {
                    t: "Retail clusters",
                    d: "Breakouts, stops, emotional entries create liquidity pools.",
                  },
                  {
                    t: "Liquidity forms",
                    d: "Opposing orders become available at obvious levels.",
                  },
                  {
                    t: "Institutions fill & scale",
                    d: "Large positions enter in stages (often largest first).",
                  },
                  {
                    t: "Structure shifts",
                    d: "Profit-taking or continuation becomes visible in price behaviour.",
                  },
                ].map((s) => (
                  <div
                    key={s.t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
                  >
                    <p className="text-sm font-extrabold text-yellow-300/90">
                      {s.t}
                    </p>
                    <p className="mt-3 text-sm text-white/80">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION HEADER */}
            <div className="mx-auto mt-16 max-w-5xl">
              <h3 className="text-center text-2xl font-extrabold text-white md:text-3xl">
                How you actually use this to trade
              </h3>

              <div className="mt-8 grid gap-6 md:grid-cols-4">
                {[
                  {
                    n: "1",
                    t: "Find the origin",
                    d: "Locate the start of strong moves where participation likely entered.",
                  },
                  {
                    n: "2",
                    t: "Mark the zone",
                    d: "Box the structure area institutions likely used.",
                  },
                  {
                    n: "3",
                    t: "Wait for return",
                    d: "If positions weren’t completed, price often revisits.",
                  },
                  {
                    n: "4",
                    t: "Read the shift",
                    d: "Use structure changes to confirm continuation or exit.",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <p className="text-sm font-extrabold text-yellow-300/90">
                      Step {s.n}
                    </p>
                    <p className="mt-2 text-lg font-extrabold text-white">
                      {s.t}
                    </p>
                    <p className="mt-3 text-sm text-white/80">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHY THIS WORKS */}
            <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <h3 className="text-2xl font-extrabold text-white text-center">
                Why this works when other methods didn’t
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="font-extrabold text-white">
                    Most trading education
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Focuses on entries</li>
                    <li>• Teaches indicators</li>
                    <li>• Blames psychology</li>
                    <li>• Adds rules without context</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <p className="font-extrabold text-white">Rethink Forex</p>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>• Explains liquidity as the constraint</li>
                    <li>• Shows staged position building</li>
                    <li>• Teaches structure as evidence</li>
                    <li>• Gives you a consistent interpretation model</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://buy.stripe.com/28EfZg0WM6fi3ZTbMrdjO00"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white transition hover:bg-blue-500"
                >
                  Get the PDF — £25
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-b from-slate-950 to-slate-50" />

      <section className="bg-slate-50">
        <CourseSections />
      </section>
    </>
  );
}