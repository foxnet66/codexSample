import Head from "next/head";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Jane Doe · 产品设计师 & 前端工程师</title>
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
