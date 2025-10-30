import Head from "next/head";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { getCopy } from "@/data/copy";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  const { meta } = getCopy(language);

  return (
    <Layout>
      <Head>
        <title>{meta.homeTitle}</title>
      </Head>
      <Hero />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <CTASection />
      <ContactSection />
    </Layout>
  );
}
