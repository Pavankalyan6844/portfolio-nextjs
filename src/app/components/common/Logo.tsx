import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="#home"
      aria-label="Go to homepage"
      className="group flex items-center gap-2"
    >
   <Image
        src="/Luxury Gold P&K Monogram Emblem.png"
        alt="Pavan Kalyan logo"
        width={40}
        height={40}
        priority
        className="h-10 w-10 rounded-lg object-contain"
      />

      <span className="hidden text-lg font-semibold tracking-tight text-white md:block">
        Pavan Kalyan
      </span>
    </Link>
  );
}