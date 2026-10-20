export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github: string;
  live?: string;
  image?:string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Human Resource Management System",
    description:
      "A full-stack HR management platform covering employee management, departments, job roles, attendance, leave management and reporting.",
    technologies: [
      "React",
      "Django",
      "Django REST",
      "TailwindCSS",
      "REST API",
    ],
    category: "Full Stack",
    github: "https://github.com/Pavankalyan6844/Hrms_Project",
    live: "#",
    image: "/projects/HrmsDashboard.png",
    featured: true,
  },
  {
    title: "Task Management System",
    description:
      "A task management application for creating, organizing and tracking tasks with a responsive React interface and REST API backend.",
    technologies: [
      "React",
      "Django",
      "REST API",
    ],
    category: "Full Stack",
    github: "https://github.com/Pavankalyan6844/Task_Mngm_Sys_React_Django",
    live: "#",
      image: "/projects/task-mgm.png",
    featured: true,
  },
  {
    title: "Portfolio",
    description:
      "A modern developer portfolio built with Next.js, TypeScript and Tailwind CSS with responsive design and interactive animations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    category: "Frontend",
    github: "https://github.com/Pavankalyan6844/portfolio-nextjs",
    image: "/projects/portfolio.png",
    live: "#",
    
    featured: true,
  },
  {
    title: "Weather Prediction Application",
    description:
      "A desktop weather application that retrieves weather information from an external API and presents it through a simple interface.",
    technologies: [
      "Python",
      "PyQt5",
      "OpenWeather API",
    ],
    category: "Python",
    github: "https://github.com/Pavankalyan6844/Weather_Predection_Application",
        image: "/projects/weather-prediction.png",
    live: "#",
  },
  {
    title: "Digital Clock",
    description:
      "A responsive digital clock application with a clean interface and real-time time display.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    category: "Frontend",
    github: "https://github.com/Pavankalyan6844/Digital-Clock",
    image: "/projects/digital-clock.png",
    live: "#",
  },
    {
    title: "Counter App",
    description:
      "A Counter application for counting using emojis changing while increasing and decreasing .",
    technologies: [
      "React",
      "CSS"
    ],
    category: "Frontend",
    github: "https://github.com/Pavankalyan6844/Counter-App",
        image: "/projects/counter-app.png",
    live: "#",
  }
];