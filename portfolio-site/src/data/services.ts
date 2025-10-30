import { Language } from "@/i18n/language";

export type Service = {
  id: string;
  title: string;
  description: string;
};

const servicesByLanguage: Record<Language, Service[]> = {
  en: [
    {
      id: "product-strategy",
      title: "Product Strategy & Discovery",
      description:
        "User interviews, opportunity assessments, and roadmapping to uncover the most valuable product bets."
    },
    {
      id: "ux-design",
      title: "Experience Design & Prototyping",
      description:
        "From information architecture to high-fidelity prototypes, delivering cohesive multi-platform experiences and scalable design systems."
    },
    {
      id: "frontend-engineering",
      title: "Front-end Engineering",
      description:
        "Modern Next.js delivery with performance, accessibility, and automated testing baked into every release."
    }
  ],
  zh: [
    {
      id: "product-strategy",
      title: "产品策略与发现",
      description:
        "通过用户访谈、机会评估与路线规划，帮助团队锁定最具价值的产品机会。"
    },
    {
      id: "ux-design",
      title: "体验设计与原型",
      description:
        "从信息架构到交互原型，打造一致的多端体验并建立可扩展的设计系统。"
    },
    {
      id: "frontend-engineering",
      title: "前端工程化",
      description:
        "基于 Next.js 的现代前端交付，覆盖性能优化、可访问性与自动化测试。"
    }
  ]
};

export const getServices = (language: Language): Service[] => servicesByLanguage[language];
