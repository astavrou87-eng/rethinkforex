import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between ${
            border
              ? "border-t border-white/10"
              : ""
          }`}
        >
          {/* Left: Logo + copyright */}
          <div className="space-y-3">
            <Logo />
            <div className="text-sm text-white/55">
              &copy; {new Date().getFullYear()} RethinkForex.co.uk — All rights
              reserved.
            </div>
          </div>

          {/* Right: Legal links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Legal
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-white/60 transition hover:text-cyan-300"
                  href="/risk-disclaimer"
                >
                  Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/60 transition hover:text-cyan-300"
                  href="/terms"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/60 transition hover:text-cyan-300"
                  href="/privacy"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}