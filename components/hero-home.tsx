"use client";

import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_35%),linear-gradient(to_bottom,_#020617,_#020617)]" />
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/70 backdrop-blur">
              For traders who feel like they’re missing something important
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              The Moment Some Traders Finally Understand The Market…
              <span className="mt-3 block text-white/80">
                And Leave Everyone Else Behind
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              The one realisation that finally shows you how the market actually moves.
            </p>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/72 sm:text-lg">
              <p>
                Have you ever had that moment where you stare at the chart and think…
              </p>

              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-6 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur">
                <p className="text-lg font-medium leading-relaxed text-white/95">
                  “I’m doing everything I should be doing…
                  <br />
                  but somehow I’m still losing?”
                </p>
              </div>

              <p>
                You study online content. You watch YouTube gurus for days. Back test every indicator and news event. You follow what mainstream
                trading education tells you to focus on.
              </p>

              <p>
                And yet somehow, you enter a perfect trade setup, price moves against within minutes,
                your stop gets hit — and then the market goes the direction you expected.
              </p>

              <p className="font-semibold text-white">
                So the real question becomes:
              </p>

              <p className="text-xl font-extrabold text-white sm:text-2xl">
                How can you be right about direction… and still lose money?
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/trader-reflection.png"
                  alt="Trader reflecting late at night while looking at charts"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="border-t border-white/10 px-5 py-6 md:px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                  The frustration most traders know well
                </p>

                <p className="mt-3 text-lg leading-8 text-white/85">
                  You are spending hours in front of your screen studying price charts. You are working harder than anyone you know to succeed and figure out something most people fail at. Tired of explaining to the people around you that you have a plan.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                      Familiar pattern
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Right idea. Wrong place. Same frustration.
                    </p>
                  </div>

                  <div className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                    Repeats
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "Studies charts seriously",
                    "Finds a setup that makes sense",
                    "Enters with confidence",
                    "Gets stopped out early",
                    "Watches price move as expected",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-sm text-white/80">{item}</span>
                      <span className="text-xs text-white/40">Again</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-sm font-semibold text-cyan-200">
                    This is the point where most traders start doubting themselves.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cyan-100/80">
                    Not because they are lazy or incapable — but because some of the 
                    most widely accepted ideas about price movement are simply wrong.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Keep reading
            </p>
            <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}