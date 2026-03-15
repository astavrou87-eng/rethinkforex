import Logo from "./logo";

export default function Header() {
  return (
    <header className="relative w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center">
          <Logo />
        </div>
      </div>
    </header>
  );
}