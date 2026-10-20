"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Logo from "../common/Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { cn } from "@/app/lib/Utils";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // lck body scroll + esc key
    useEffect(()=>{
      if(!isMobileMenuOpen){
        document.body.style.overflow = "";
        return;
      }

      document.body.style.overflow = "hidden";
      
      const handleEscape = ( event: KeyboardEvent)=>{
        if(event.key === "Escape"){
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener("keydown",handleEscape);
      return () =>{
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    },[isMobileMenuOpen]);

    const closeMobileMenu = () =>{
      setIsMobileMenuOpen(false);
    };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <nav
            className={cn(
              "mt-4 flex h-16 items-center justify-between rounded-full border px-5 transition-all duration-500 md:px-6",
              isScrolled
                ? "border-white/15 bg-[#0b1120]/80 shadow-lg shadow-black/10 backdrop-blur-2xl"
                : "border-white/10 bg-white/5 backdrop-blur-xl"
            )}
          >
            <Logo />

            <NavLinks />

            <Button className="hidden md:flex">
              <a
  href="/resume/pavankalyan_cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Resume  
</a>
            </Button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((previous)=> !previous)}
              aria-label={
                isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              className=" relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
              {
                isMobileMenuOpen ? (
                  <motion.span
                  key="close"
                  initial={{opacity: 0, rotate: -90 }}
                  animate={{opacity: 1, rotate:0 }}
                  exit={{opacity:0 , rotate: 90 }}
                  >
                    <X size={21}/>

                  </motion.span>
                ):(
                  <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0}}
                  exit={{ opacity: 0, rotate: -90}}
                  >
                    <Menu size={21}/>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
}