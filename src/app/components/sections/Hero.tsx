import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero(){
    return (
        <>
            <section 
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
            >
                <Container>
                    <div className="relative z-10 max-w-4xl">
                       <p className="mb-4 text-sm font-medium uppercase tracking-[0.25rem] text-blue-400">
                        Hello, I'm
                        </p> 
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        Pavan Kalyan
                        </h1>
                        <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-300 sm:text-4xl md:text-5xl"
                        >Building{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                            modern web applications.
                            </span>
                            </h2>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                            Associate Techinical Consultant focus on building modern,
                            respinsive web experience with React, Next.js and Django.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                        <Button>
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4"/>
                        </Button>
                        <Button variant="outline">
                            Download Resume
                        </Button>
                        </div>
                    </div>
                </Container>

            </section>
        </>
    )
}