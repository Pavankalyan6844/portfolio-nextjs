"use client";
import { AnimatePresence, motion } from "framer-motion";
import {X} from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/app/constants/navigations";
import Button from "@/app/components/ui/Button"
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-white/10 bg-[#030712]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-slate-400 text-xl">
                Menu
              </span>

              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-12">
              <ul className="space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className=" group flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:pl-6 hover:text-white"
                    >
                      <span>{link.label}</span>

                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Button className="w-full">
                  Resume
                </Button>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
