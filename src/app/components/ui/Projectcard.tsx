import { Project } from "@/app/constants/projects"
import Image from "next/image";
import { ArrowDown, ArrowUpRight} from "lucide-react";
interface ProjectCardProps{
    project:Project;
    index: number
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.04]">
      {/* Project visual */}
<div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10">
  {project.image ? (
    <>
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/10 to-transparent opacity-70" />

      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
        {/* <span className="translate-y-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100   ">
          View Project 
        </span> */}
      </div>
    </>
  ) : (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.18),transparent_40%)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-5xl font-bold text-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </>
  )}

  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
    {project.category}
  </span>
</div>
      {/* Content */}
      <div className="p-6 md:p-7">
        <h3 className="text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-5 border-t border-white/10 pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
            GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              Live Demo
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}