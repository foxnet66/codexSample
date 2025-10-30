import { skills } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export const SkillsSection = () => {
  return (
    <section id="skills" className="bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Skills"
          title="跨学科的核心技能组合"
          description="深耕策略、体验与工程三大领域，确保每一次交付既优雅又可持续迭代。"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((category) => (
            <div key={category.id} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900">{category.title}</h3>
              <ul className="mt-4 space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-neutral-600">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      ✓
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
