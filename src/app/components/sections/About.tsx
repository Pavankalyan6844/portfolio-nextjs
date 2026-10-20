import Reveal from "../common/Reveal";
import Container from "../ui/Container"

const highlights = [
  {
    value: "React",
    label: "Frontend",
  },
  {
    value: "Next.js",
    label: "Modern Web",
  },
  {
    value: "Django",
    label: "Backend",
  },
  {
    value: "REST",
    label: "API Development",
  },
];

export default function About() {
  return (
    <Reveal>

<section
      id="about"
      className="relative overflow-hidden border-t border-white/5 py-28 md:py-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Section heading */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="text-lg leading-8 text-slate-300">
              I'm Pavan Kalyan, an Associate Technical Consultant focused on
              building modern and responsive web applications.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              I enjoy working across the frontend and backend, from creating
              responsive interfaces with React and Next.js to building APIs
              and backend services with Django and Django REST Framework.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              I care about clean UI, reusable components, practical
              architecture, and continuously improving the way applications
              feel and perform.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
                >
                  <p className="font-mono text-lg font-semibold text-white">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
    </Reveal>
    
  );
}