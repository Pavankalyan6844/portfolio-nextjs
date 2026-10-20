"use client"
import Link from "next/link";
import { NAV_LINKS } from "@/app/constants/navigations";
import useActiveSection from "@/app/hooks/useActiveSection";
import { li } from "framer-motion/client";
import {cn} from "@/app/lib/Utils"
interface NavLinksProps {
  onNavigate?: () => void;
}

export default function NavLinks({
  onNavigate,
}: NavLinksProps) {
  const activeSection = useActiveSection();

  return (
    <ul className="hidden items-center gap-1 md:flex">
      {NAV_LINKS.map((item) => {
        const sectionId = item.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-white/10 text-white shadow-sm shadow-blue-500/10"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              {item.label}

              {isActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

