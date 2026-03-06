"use client";

import Link from "next/link";
import Image from "next/image";
import StripeCheckoutButton from "@/components/stripe-checkout-button";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute left-1/2 top-[-140px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-14 pb-12 text-center md:pt-24 md:pb-16">
          {/* Eyebrow */}
          <p className="mx-auto mt-2 max-w-3xl text-sm font-semibold text-white/75 sm:text-base md:text-lg">
            You learned <span className="text-white">setups</span>. Institutions trade{" "}
            <span className="text-white">liquidity</span>.
          </p>

          {/* Headline (recognition-first to match your ad) */}
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white leading-[1.08] sm:text-5xl sm:leading-tight md:text-7xl">
            “I believe that my inconsistency isn’t because I’m undisciplined or broken... 
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            it’s because I’ve been trained to look at the{" "}
            <span className="font-black">
              <span className="bg-yellow-400/80 text-slate-950 px-2 py-1 rounded box-decoration-clone">
                market the wrong way.”
              </span>
            </span>
          </h1>

          {/* Subhead (relief + bridge to mechanism) */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            You’re not “bad at trading.” Most retail traders are taught the wrong game:{" "}
            <span className="font-semibold text-white">By learning where banks place their trades</span> you can place {" "}
            <span className="font-semibold text-white">your own trades where they do. </span>.
            <span className="font-extrabold text-white">
              {" "}
              This PDF allows you to stop blaming yourself. The retail trading method you learned is designed to lose.
            </span>
          </p>

          {/* Trust/clarity pills */}
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm text-white/85">
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">Instant</span> PDF access
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">No indicators.</span> No signals.
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 shadow-sm backdrop-blur">
              <span className="font-extrabold text-white">Secure</span> Stripe checkout
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <StripeCheckoutButton className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500">
              Get the Liquidity Guide — £25
            </StripeCheckoutButton>

            <Link
              href="/risk-disclaimer"
              className="text-sm font-semibold text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
            >
              Risk disclaimer
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/70">
            Educational content only. Trading involves risk. No guarantees.
          </p>

          {/* Recognition + story + trust (above the fold persuasion) */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-6 text-left shadow-sm backdrop-blur">
            <p className="text-sm font-extrabold text-white">If this sounds familiar…</p>

            <ul className="mt-4 space-y-3 text-base text-white/85">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>You get stopped out… then price runs in your original direction.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>You wait for “confirmation”… and the move is already gone.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>You hesitate after a loss… then miss the clean setup.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>You keep changing strategies because nothing feels reliable.</span>
              </li>
            </ul>

            <p className="mt-5 text-sm font-semibold text-white/85">
              That pattern isn’t random. It’s often liquidity.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-sm font-extrabold text-white">A quick note:</p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                I thought the problem was me — discipline, psychology, “better entries”. But after
                watching the same sequence repeat (stop-out → reversal → missed move), the shift
                was learning to read{" "}
                <span className="font-semibold text-white">liquidity + positioning</span>{" "}
                before pressing buy or sell.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-sm font-extrabold text-white">What this is (and isn’t)</p>
                <p className="mt-2 text-sm text-white/80">
                  ✅ Not signals. ✅ Not a bot. ✅ Not another indicator strategy.
                  <br />
                  It’s a simple PDF framework that shows where liquidity sits — so you stop
                  trading blind.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-sm font-extrabold text-white">Make-it-right guarantee</p>
                <p className="mt-2 text-sm text-white/80">
                  If it doesn’t change how you understand price movement, email within 30 days and
                  we’ll make it right.
                </p>
              </div>
            </div>
          </div>

          {/* Mechanism Summary Card */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-6 text-left shadow-sm backdrop-blur">
            <p className="text-sm font-extrabold text-white">What this teaches you:</p>

            <ul className="mt-4 space-y-3 text-base text-white/85">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>How institutions build positions in stages (often largest first).</span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  Why price returns to specific zones when positions aren’t fully built.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  How profit-taking appears through structure shifts and larger retracements.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                <span>
                  Why breakout failures and “stop hunts” are usually liquidity events — not
                  randomness.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}