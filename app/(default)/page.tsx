import Hero from "@/components/hero-home";
import TransformationSection from "@/components/transformation-section";
import CourseSections from "@/components/course-sections";
import StripeCheckoutButton from "@/components/stripe-checkout-button";

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
          RECOGNITION / PAIN SECTION
         ========================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700/80">
                This is where most traders start doubting themselves
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Being right about direction…
                <br className="hidden md:block" />
                and still losing
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                If you’ve ever felt like the market keeps proving you right{" "}
                <span className="font-semibold text-slate-900">after</span> it has already
                taken you out, this is the part that will probably feel familiar.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Section 1
                </p>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                  If you’ve traded forex for any length of time…
                </h3>

                <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-slate-700">
                  <p>If you’ve traded forex for any length of time, you’ve probably experienced something strange.</p>

                  <p>You study the chart.</p>
                  <p>Your idea is correct.</p>
                  <p>Price eventually moves exactly where you expected.</p>

                  <p className="font-semibold text-slate-900">But first…</p>

                  <p>It stops you out.</p>
                  <p>Then it moves without you.</p>

                  <p>Again.</p>
                  <p>And again.</p>

                  <p>
                    After a while, you start asking yourself a painful question:
                  </p>

                  <p className="text-xl font-extrabold text-slate-900">
                    “Am I just bad at this?”
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Section 2
                </p>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
                  At first, you assume the problem is you
                </h3>

                <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-slate-700">
                  <p>At first, you assume the problem is discipline.</p>

                  <p>Maybe you’re overtrading.</p>
                  <p>Maybe you’re emotional.</p>
                  <p>Maybe you just need more screen time.</p>

                  <p className="font-semibold text-slate-900">So you try everything.</p>

                  <p>Indicators.</p>
                  <p>Strategies.</p>
                  <p>YouTube systems.</p>
                  <p>Mentors.</p>
                  <p>Signals.</p>

                  <p>And yet the same pattern keeps happening.</p>

                  <p>
                    You’re often right about direction…
                  </p>

                  <p className="text-xl font-extrabold text-slate-900">
                    But you still lose.
                  </p>

                  <p>That’s when doubt starts creeping in.</p>

                  <p>Maybe the market is random.</p>
                  <p>Maybe the game is rigged.</p>
                  <p>Or maybe…</p>

                  <p className="text-xl font-extrabold text-slate-900">
                    you’re just not cut out for this.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                That feeling is exactly why most traders keep jumping from one method to the next.
                They assume the problem is themselves…
                <span className="font-semibold text-slate-900"> when they may have been taught to look at the market the wrong way.</span>
              </p>
            </div>

            <div className="mt-10 text-center">
              <StripeCheckoutButton className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500">
                Get the Liquidity Guide — £25
              </StripeCheckoutButton>

              <p className="mt-3 text-sm text-slate-500">
                Instant PDF access. One-time purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <CourseSections />
      </section>
    </>
  );
}