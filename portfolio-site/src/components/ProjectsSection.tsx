import Image from "next/image";
import Link from "next/link";
import { getCopy } from "@/data/copy";
import { getProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const projects = getProjects(language);
  const { projects: projectsCopy } = getCopy(language);

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow={projectsCopy.eyebrow}
          title={projectsCopy.title}
          description={projectsCopy.description}
        />
        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="grid gap-8 rounded-3xl border border-neutral-200 bg-neutral-50/60 p-6 shadow-sm md:grid-cols-[2fr,3fr] md:p-10"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 70vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="rounded-full bg-white px-3 py-1 font-medium text-primary">{project.year}</span>
                  <span>{project.technologies.join(" · ")}</span>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900">{project.title}</h3>
                <p className="text-base leading-relaxed text-neutral-600">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {projectsCopy.viewCaseStudy}
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M5 12a1 1 0 0 1 1-1h9.586l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L15.586 13H6a1 1 0 0 1-1-1Z" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
