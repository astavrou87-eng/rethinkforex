import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* Left: Logo + copyright */}
          <div className="space-y-2">
            <Logo />
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} RethinkForex.co.uk - All rights
              reserved.
            </div>
          </div>

          {/* Right: Legal links */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/risk-disclaimer"
                >
                  Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="/terms"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
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
