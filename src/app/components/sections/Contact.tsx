import { ArrowUpRight, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import Container from "../ui/Container";
import Reveal from "../common/Reveal";

const GitHubIcon: ComponentType<SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className={className ?? "bi bi-github"}
    viewBox="0 0 16 16"
    {...props}
  > 
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const LinkedInIcon: ComponentType<SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className={className ?? "bi bi-linkedin"}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const contactLinks = [
    {
        label:"Email",
        value:"pavankalyan6844@gmail.com",
        href:"mailto:pavankalyan6844@gmail.com",
        icon: Mail
    },
    {
        label:"GitHub",
        value:"github.com/Pavankalyan6844",
        href:"https://github.com/Pavankalyan6844",
        icon: GitHubIcon
    },
    {
        label:"LinkedIn",
        value:"Connect With Me",
        href:"https://www.linkedin.com/in/pavankalyans01/",
        icon: LinkedInIcon
    }

]

export default function Contact(){
    return (
        <Reveal>

<section
        id="contact"
        className=" relative oveflow-hidden border-t border-white/5 py-28 md:py-36">
{/* background glow  */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -tanslate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <Container>
            <div className=" relative z-10 grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center ">
{/* main content */}
            <div>
                <p className=" text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                    Contact
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tarcking-tight text-white sm:text-5xl md:text-6xl">
                Let's build something{" "}
                <span className=" bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                    meaningful.
                </span>
                </h2>
            <p className=" mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                I'm always intrested in connecting with people, discussing
                intresting projects, and exploring new opportunities in 
                frontend and full-stack development.
            </p>
            <a href="mailto:pavankalyan6844@gmail.com"
            className=" mt-8 inline-flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-blue-400">
                Let's Talk 
                <ArrowUpRight size={20} />

            </a>
            </div>

{/* contact links  */}
        <div className=" space-y-3">
            {
                contactLinks.map((item) =>{
                    const Icon = item.icon;
                    return (
                        <a 
                        key={item.label}
                        href={item.href}
                        target={
                            item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                            item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className=" group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:translate-y-1 hover:border-blue-400/2 hover:bg-white/[0.05]"
                        >
                            <div className=" flex items-center gap-4">
                                <div className=" flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors group-hover:text-blue-400">
                                <Icon size={20}/>
                                </div>

                            <div>
                                <p className=" text-xs uppercase tracking-wider text-slate-500 ">
                                    {item.label}
                                </p>
                                <p className=" mt-1 text-sm font-medium text-slate-200">
                                    {item.value}
                                </p>
                            </div>

                            </div>
                            <ArrowUpRight
                            size={18}
                            className=" text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white border border-white rounded-xl"
                        />
                        </a>
                    )
                })
            }
        </div>

            </div>
        </Container>


        </section>
        </Reveal>
        
    )
}