import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/common/Reveal";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
  {
    period: "2026 — Present",
    role: "Associate Technical Consultant",
    company: "BTS",
    type: "Web Development",
    description:
      "Working on web application development with a focus on responsive interfaces, dynamic forms, client-side validation, reusable UI components and interactive data-driven interfaces.",
    responsibilities: [
      "Developing responsive web interfaces using HTML, CSS and JavaScript.",
      "Working with jQuery for client-side interactions and dynamic UI behavior.",
      "Building forms and data-driven interfaces using DevExpress components.",
      "Implementing client-side validation and interactive UI functionality.",
      "Working with reusable components and integrating frontend functionality with application APIs.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "DevExpress",
      "REST APIs",
    ],
  },
  {
    period: "2025 — 2026",
    role: "Python Full Stack Developer Intern",
    company: "Internship",
    type: "Full Stack Development",
    description:
      "Worked on full-stack applications while gaining practical experience in frontend development, backend APIs, database integration and application architecture.",
    responsibilities: [
      "Developed REST APIs using Python, Django and Django REST Framework.",
      "Built responsive interfaces using React, Next.js and Tailwind CSS.",
      "Worked with CRUD operations and API integration.",
      "Implemented database models and relationships.",
      "Used Git and GitHub for version control and project collaboration.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Tailwind CSS",
      "SQL",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 py-28 md:py-36"
    >
      <Container>
        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Experience that{" "}
              <span className="text-slate-500">
                shaped me.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              My journey across frontend and full-stack development,
              combining professional experience with hands-on project
              development.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/70 via-violet-500/40 to-transparent md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <Reveal
                key={`${experience.role}-${experience.period}`}
                delay={index * 0.12}
              >
                <article className="relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-8 hidden h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-500/40 md:block" />

                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04] md:p-8">
                    {/* Header */}
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1.5 text-xs font-medium text-blue-400">
                            <CalendarDays size={13} />
                            {experience.period}
                          </span>

                          <span className="text-xs text-slate-600">
                            {experience.type}
                          </span>
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                          {experience.role}
                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                          <BriefcaseBusiness size={15} />
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-7 max-w-4xl leading-8 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-7">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Key Contributions
                      </p>

                      <ul className="space-y-3">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <li
                              key={responsibility}
                              className="flex gap-3 text-sm leading-7 text-slate-400"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-6">
                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-blue-400/30 hover:text-white"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}