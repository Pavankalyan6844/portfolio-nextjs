import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group flex items-center gap-2"
    >
      <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-sm font-semibold text-white transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
        &lt;PK /&gt;
      </span>

      <span className="hidden text-lg font-semibold tracking-tight text-white md:block">
        Pavan Kalyan
      </span>
    </Link>
  );
}