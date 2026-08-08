"use client"
import Container from "@/app/components/ui/Container";
import Logo from "../common/Logo";
import NavLinks from "./NavLinks";
import Button from "../ui/Button";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    return(
        <>
        <header className="fixed inset-x-0 top-0 z-50">
            <Container>
                <nav className="mt-4 flex h-16 items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 backdrop-blur-xl md:px-6">
                <Logo/>

                <NavLinks/>

                <Button className="hidden md:flex">
                    Resume
                </Button>
                <button 
                type="button" 
                onClick={()=> setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="rounded-full border border-white/10 p-2.5 text-slate-300  transition hover:bg-white/10 hover:text-white md:hidden"
                >
                    <Menu size={22}/>

                </button>
                </nav>
            </Container>
        </header>
        <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={()=>setIsMobileMenuOpen(false)}
        />
        </>
    )
}