
"use client";
import {motion} from "framer-motion";
import { easeInOut, easeOut, scale } from "framer-motion";
import { Repeat } from "lucide-react";
import { ArrowUpRight, Code2,  } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button"
import TypingText from "../common/TypingText";
const skills = ["React","Next.js","Django","TypeScript"]
const HERO_MESSAGES = [
  "Building Modern Web Applications.",
  "Creating Responsive User Experiences.",
  "Developing Full-Stack Solutions.",
];

export default function Hero(){
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
        });
    };
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030712] pt-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"
        />

        {/* Violet glow */}
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-violet-500/20 blur-[130px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Top gradient */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/5 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Pavan
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Kalyan.
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-7 max-w-3xl text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl md:text-4xl"
            >
              <span className=" bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                <TypingText
                words={HERO_MESSAGES}
                />

              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              Associate Technical Consultant focused on building modern,
              responsive web experiences with React, Next.js and Django.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button onClick={scrollToProjects}>
                View Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline">
                         <a
  href="/resume/pavankalyan_cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
 Download Resume  
</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-5"
            >
              <a
                href="https://github.com/Pavankalyan6844"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition-colors duration-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors duration-300 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
              </a>

              <span className="h-5 w-px bg-white/10" />

              <span className="text-xs font-medium uppercase tracking-widest text-slate-600">
                Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Developer Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative hidden lg:block"
          >
            {/* Glow behind card */}
            <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[100px]" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto max-w-md"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120]/90 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <Code2 size={18} className="text-slate-500" />
                </div>

                {/* Code */}
                <div className="p-6 font-mono text-sm leading-8">
                  <p>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-blue-300">developer</span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">name:</span>{" "}
                    <span className="text-green-300">
                      "Pavan Kalyan"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">role:</span>{" "}
                    <span className="text-green-300">
                      "Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">passion:</span>{" "}
                    <span className="text-green-300">
                      "Building products"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">learning:</span>{" "}
                    <span className="text-green-300">
                      "AI Engineering"
                    </span>
                  </p>

                  <p>{"}"}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-slate-600">
          Scroll
        </span>

        <motion.div
          animate={{ height: [20, 35, 20] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-px bg-gradient-to-b from-blue-400 to-transparent"
        />
      </motion.div>
    </section>
    )
}
