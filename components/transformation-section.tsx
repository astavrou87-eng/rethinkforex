"use client";

import Image from "next/image";
import Link from "next/link";
import StripeCheckoutButton from "@/components/stripe-checkout-button";

export default function TransformationSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Slightly lighter dark than hero, and a clean fade into the section below */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-[-120px] h-[460px] w-[980px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        {/* Fade to dark (not white) so your page stays coherent */}
        <div className="absolute inset-x-0 bottom-[-1px] h-28 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-12">
            {/* Image */}
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm backdrop-blur">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/trader-reflection.png"
                    alt="A trader analysing price structure on a chart"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>

              <p className="mt-3 text-sm text-white/70">
                The edge isn’t a secret indicator — it’s understanding how size actually moves
                through price.
              </p>
            </div>

            {/* Copy */}
            <div className="md:col-span-6">
              <p className="text-sm font-semibold text-yellow-300/90">
                Here’s the core shift.
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                You weren’t taught to trade like institutions.
                <br className="hidden md:block" />
                You were taught to chase the move after it happened.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/85">
                Banks and large institutions can’t just “click buy.” They need{" "}
                <span className="font-semibold text-white">liquidity</span> — enough opposing
                orders — to{" "}
                <span className="font-semibold text-white">
                  enter, scale, take profits, and exit
                </span>
                . That constraint shapes price behaviour.
              </p>

              {/* Comparison blocks */}
              <div className="mt-7 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold text-white">
                    What retail is trained to focus on
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Entries and “setups” without context</li>
                    <li>• Breakouts that depend on continuation</li>
                    <li>• Stops placed by comfort, not structure</li>
                    <li>• Treating reversals as “random”</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold text-white">
                    What you’ll be able to do after this PDF
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>
                      • Mark where large participation likely entered (origin moves + zones)
                    </li>
                    <li>
                      • Recognise staged position building (and why the biggest order often
                      comes first)
                    </li>
                    <li>• Spot profit-taking via structure shifts and larger retracements</li>
                    <li>
                      • Understand why price returns to key levels when liquidity is needed
                      again
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5">
                  <p className="text-sm font-extrabold text-white">The shift</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    From <span className="font-semibold text-white">“find a setup”</span> → to{" "}
                    <span className="font-semibold text-white">
                      reading liquidity and institutional positioning
                    </span>
                    . <br />
                    From reacting late → to waiting for the areas that actually matter.
                  </p>
                </div>
              </div>

              {/* CTA (now shared tracked component) */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <StripeCheckoutButton className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500">
                  Get the PDF — £25
                </StripeCheckoutButton>

                <Link
                  href="/risk-disclaimer"
                  className="text-sm font-semibold text-white/85 underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
                >
                  Risk disclaimer
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/70">
                Instant PDF access after checkout. Support:{" "}
                <a
                  href="mailto:support@rethinkforex.co.uk"
                  className="underline decoration-white/30 underline-offset-2 hover:decoration-white/60"
                >
                  support@rethinkforex.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}