import Link from "next/link";
import { cta } from "@/data/cta";

export const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">{cta.heading}</h2>
        <p className="text-lg text-white/80 md:text-xl">{cta.description}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={cta.primaryAction.href}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
          >
            {cta.primaryAction.label}
          </Link>
          <Link
            href={cta.secondaryAction.href}
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {cta.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
};
