import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/ui/Container"
import Button from "@/app/components/ui/Button"
import Hero from "./components/sections/Hero";
export default function Home() {
  return (
    <>
      <Navbar />

    <main className="bg-[#030712]">
     <Navbar/>
     <Hero/> 
    </main>
    </>
  );
}