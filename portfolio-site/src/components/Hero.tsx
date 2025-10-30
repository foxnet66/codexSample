import Link from "next/link";
import { getCopy } from "@/data/copy";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { language } = useLanguage();
  const { hero } = getCopy(language);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-white to-primary/5" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-32 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary-dark">
            {hero.badge}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="text-lg text-neutral-600 md:text-xl">
            {hero.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-primary-dark"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:border-primary hover:text-primary"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/20" />
              <div>
                <p className="text-sm font-medium text-neutral-500">{hero.highlight.name}</p>
                <p className="text-lg font-semibold text-neutral-900">{hero.highlight.role}</p>
              </div>
            </div>
            <p className="text-neutral-600">
              “{hero.highlight.quote}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
