import Link from "next/link";
import Container from "../ui/Container";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.54 1.01.11-.79.42-1.33.76-1.64-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.25-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.02-.33 3.35 1.24a11.44 11.44 0 0 1 6.1 0c2.33-1.57 3.34-1.24 3.34-1.24.67 1.65.25 2.88.12 3.18.78.84 1.25 1.91 1.25 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.21v3.28c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.75h2.9V18H5.5V9.75Zm4.67 0h2.76v1.13h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.38V18h-2.9v-16.7c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43V18h-2.9V9.75Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <Container>
        <div className="py-12">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">

            {/* Brand */}
            <div>
              <Link
                href="#home"
                aria-label="Go to homepage"
                className="group inline-flex items-center gap-2"
              >
<Image
  src="/Luxury Gold P&K Monogram Emblem.png"
  alt="Pavan Kalyan logo"
  width={32}
  height={32}
  className="rounded-lg object-contain"
/>

                <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                  Pavan Kalyan
                </span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                Building modern, responsive web experiences with a focus on
                clean UI and practical engineering.
              </p>
            </div>

                {/* Navigation  */}
                <nav>
                    <p className=" mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                        Navigate
                    </p>
                    <ul className=" grid grid-cols-2 gap-x-8 gap-y-3">
                        {
                            footerLinks.map((link)=>(
                                    <li key={link.label}> 
                                    <Link href={link.href}
                                    className=" text-sm text-slate-500 transition-colors duration-300 hover:text-white">
                                        {link.label}
                                    </Link>
                                    </li>
                            ))
                        }
                    </ul>
                </nav>

                {/*  social  */}

                <div>
                    <p className=" mb-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                        Connect
                    </p>
                    <div className=" flex gap-3">
                        <a href="https://github.com/Pavankalyan6844"
                        target=" _blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className=" flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                            <GitHubIcon/>
                        </a>
                        <a href="https://www.linkedin.com/in/pavankalyans01/"
                        aria-label="LinkedIn"
                        className=" flex h-10 w-10 items-center justify-center rounded-full border border-full border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white "
                        >
                        <LinkedInIcon/>
                        </a>
                    </div>
                </div>
                </div>
                {/*  bottom  */}

                <div className=" mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-sx text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {new Date().getFullYear()} Pavan Kalyan. All rights reserved.
                </p>
                <Link
                href="#home"
                className=" group inline-flex items-center gap-2 transition-colors hover:text-slate-300"
                >
                    Back to top 
                    <ArrowUpRight
                    size={14}
                    className=" transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </Link>
                </div>
                </div>
            </Container>
        </footer>
    )
}