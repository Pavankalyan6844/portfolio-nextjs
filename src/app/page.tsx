import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Hero from "./components/sections/Hero";
import ScrollToTop from "./components/common/ScrollToTop";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
export default function Home() {
  return (
    <>
      
      <main className="bg-[#030712]">
        <Navbar />

        <Hero />

        <About />
        
        <Experience />
        
        <Skills />

        <Project />

        <Contact />
        
        <Footer />

        <ScrollToTop />
      </main>
    </>
  );
}
