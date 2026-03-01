"use client";

import Image from "next/image";
import Link from "next/link";

export default function TransformationSection() {
  const stripeUrl = "https://buy.stripe.com/28EfZg0WM6fi3ZTbMrdjO00";

  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.fbq === "function") {
        w.fbq("track", "InitiateCheckout", { value: 25.0, currency: "GBP" });
      }
    } catch {
      // no-op
    }

    setTimeout(() => {
      window.location.href = stripeUrl;
    }, 150);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Slightly lighter dark than hero, and a clean fade into white below */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute left-1/2 top-[-120px] h-[460px] w-[980px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        {/* Fade to white for the next section (fixes abrupt essay transition) */}
        <div className="absolute inset-x-0 bottom-[-1px] h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          {/* Use 12-col grid so the image doesn't feel “small/floaty” */}
          <div className="grid items-center gap-10 md:grid-cols-12">
            {/* Image */}
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm backdrop-blur">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
                  <Image
                    src="/images/trader-reflection.png"
                    alt="A retail trader reflecting late at night"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>

              {/* Small caption: keep it, but make it feel intentional */}
              <p className="mt-3 text-sm text-white/70">
                You’re not alone in this — but most people never fix it.
              </p>
            </div>

            {/* Copy */}
            <div className="md:col-span-6">
              <p className="text-sm font-semibold text-yellow-300/90">
                Let me show you what this fixes.
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                You weren’t taught to trade like banks.
                <br className="hidden md:block" />
                You were taught to chase their leftovers.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/85">
                Banks and large institutions can’t just “click buy.” They need{" "}
                <span className="font-semibold text-white">liquidity</span> —
                enough opposing orders — to{" "}
                <span className="font-semibold text-white">
                  enter, scale, and exit
                </span>{" "}
                positions. That’s why price moves the way it does.
              </p>

              {/* Transformation blocks */}
              <div className="mt-7 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold text-white">
                    What retail is trained to do
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Focus on entries and “setups” in isolation</li>
                    <li>• Place stops based on pain, not structure</li>
                    <li>• Get trapped in the same zones banks use for liquidity</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm font-extrabold text-white">
                    What this PDF teaches you instead
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• How to spot where institutions likely placed positions</li>
                    <li>• How they build positions (and why the biggest order comes first)</li>
                    <li>• How to recognise profit-taking via structure changes</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5">
                  <p className="text-sm font-extrabold text-white">The shift</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    From “find a setup” → to{" "}
                    <span className="font-semibold text-white">
                      follow institutional positioning
                    </span>
                    . <br />
                    From self-blame → to{" "}
                    <span className="font-semibold text-white">
                      reading liquidity and intent
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={stripeUrl}
                  onClick={handleCheckoutClick}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-sm transition hover:bg-blue-500"
                >
                  Get the PDF — £25
                </a>

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