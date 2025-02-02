// Import icons and required images
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImage from "@/assets/images/grain.jpg";
import portfolioAxel from "@/assets/images/portfolio-axel-react.png";
import trelloClone from "@/assets/images/trello-clone.png";
import { Card } from "@/components/Card";
import Image from "next/image";

// Portfolio projects data
const portfolioProjects = [
  {
    company: "Trello Clone",
    year: "2024",
    title: "Web App Collaborative",
    results: [
      { title: "Authentication with Workspaces" },
      { title: "Unsplash API & Activity Logging System" },
      { title: "Stripe Subscription & Unlimited Boards" },
    ],
    link: "https://trello-clone-weld-tau.vercel.app/",
    image: trelloClone,
  },
  {
    company: "Personal Portfolio",
    year: "2025",
    title: "Animated React Website",
    results: [
      { title: "React & Next.js Foundations" },
      { title: "TailwindCSS Mastery" },
      { title: "Framer Motion & CSS Animations" },
    ],
    link: "",
    image: portfolioAxel,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        {/* Section header */}
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
          See how I transformed concepts into engaging digital experiences
        </p>

        {/* Projects list */}
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="sticky px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{ top: `calc(64px + ${projectIndex * 40}px ` }}
            >
              {/* Background grain effect */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              {/* Start of grid layout */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left grid */}
                <div className="lg:pb-16">
                  {/* Project header */}
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  {/* Divider */}
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />

                  {/* Results list */}
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Site link button */}
                  <a href={project.link}>
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                {/* Right grid */}
                <div className="relative">
                  {/* Project image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="-mb-4 mt-8 rounded-t-3xl border-2 border-white/20 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
