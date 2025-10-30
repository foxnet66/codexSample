import { getCopy } from "@/data/copy";
import { getServices } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

export const ServicesSection = () => {
  const { language } = useLanguage();
  const services = getServices(language);
  const { services: servicesCopy } = getCopy(language);

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow={servicesCopy.eyebrow}
          title={servicesCopy.title}
          description={servicesCopy.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-neutral-50/60 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10" />
              <h3 className="text-2xl font-semibold text-neutral-900">{service.title}</h3>
              <p className="text-base leading-relaxed text-neutral-600">{service.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary">
                {servicesCopy.learnMore}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  fill="currentColor"
                >
                  <path d="M5 12a1 1 0 0 1 1-1h9.586l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L15.586 13H6a1 1 0 0 1-1-1Z" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
