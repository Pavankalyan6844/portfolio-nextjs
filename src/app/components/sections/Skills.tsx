import Container from "@/app/components/ui/Container";
import Reveal from "@/app/components/common/Reveal";
import {
  Code2,
  Database,
  Globe,
  Layers3,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Lucide Icons",
      "jQuery",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing APIs and backend services with Python-based technologies.",
    icon: Code2,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "CRUD",
      "Authentication",
    ],
  },
  {
    title: "Database & Data",
    description:
      "Working with relational databases, queries and application data models.",
    icon: Database,
    skills: [
      "SQL",
      "MySQL",
      "SQLite",
      "Database Design",
      "Relationships",
      "Django ORM",
    ],
  },
  {
    title: "UI & Enterprise Tools",
    description:
      "Building business-oriented interfaces and interactive data-driven components.",
    icon: Layers3,
    skills: [
      "DevExpress",
      "DataGrid",
      "Forms",
      "Validation",
      "DateBox",
      "SelectBox",
      "Popup",
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Tools I use to develop, test, manage and maintain applications.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",
      "Chrome DevTools",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 py-28 md:py-36"
    >
      <Container>
        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              My technical{" "}
              <span className="text-slate-500">
                toolkit.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Technologies and tools I use to build responsive interfaces,
              APIs, dashboards and full-stack applications.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                delay={index * 0.08}
                className={
                  index === skillGroups.length - 1
                    ? "md:col-span-2"
                    : ""
                }
              >
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04] md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/20">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {group.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/5 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}