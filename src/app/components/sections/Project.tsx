import { PROJECTS } from "@/app/constants/projects";
import Container from "../ui/Container";
import ProjectCard from "@/app/components/ui/Projectcard"
import Reveal from "../common/Reveal";

export default function Project(){
    return(
        <Reveal>

<section
        id="projects"
        className="border-t border-white/5 py-28 md:py-36">
        <Container>
            {/* heading */}
            <div
            className=" mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
               <div>
                <p
                className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                    Projects
                </p>
                <h2 
                className=" mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"> 
                    Things I've{" "}
                <span className=" text-slate-500">
                     built.
                </span>
                </h2>
                </div> 

                <p className=" max-w-md text-sm leading-7 text-slate-500 md:text-right">
                      A selection of applications and experiments I've built while
            learning, working and exploring modern web development.
                </p>
            </div>
            {/* project grid */}
            <div className=" grid gap-6 md:grid-cols-2">
               {PROJECTS.map((project, index) => (
  <Reveal
    key={project.title}
    delay={index * 0.08}
  >
    <ProjectCard
      project={project}
      index={index}
    />
  </Reveal>
))}
            </div>
        </Container>

        </section>
        </Reveal>
        
    )
}