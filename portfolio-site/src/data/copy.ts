import { Language } from "@/i18n/language";

export type HeaderCopy = {
  brand: string;
  nav: { href: string; label: string }[];
  primaryCta: string;
  mobileCta: string;
  menuToggleLabel: string;
  languageToggleLabel: string;
};

export type HeroCopy = {
  badge: string;
  heading: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  highlight: {
    name: string;
    role: string;
    quote: string;
  };
};

export type ServicesCopy = {
  eyebrow: string;
  title: string;
  description: string;
  learnMore: string;
};

export type SkillsCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProjectsCopy = {
  eyebrow: string;
  title: string;
  description: string;
  viewCaseStudy: string;
};

export type CTACopy = {
  heading: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
};

export type ContactCopy = {
  eyebrow: string;
  title: string;
  description: string;
  fields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  submit: { idle: string; submitting: string };
  success: string;
  error: string;
};

export type FooterCopy = {
  studioName: string;
  rights: string;
  links: { href: string; label: string }[];
};

export type MetaCopy = {
  homeTitle: string;
};

export type Copy = {
  header: HeaderCopy;
  hero: HeroCopy;
  services: ServicesCopy;
  skills: SkillsCopy;
  projects: ProjectsCopy;
  cta: CTACopy;
  contact: ContactCopy;
  footer: FooterCopy;
  meta: MetaCopy;
};

export const copy: Record<Language, Copy> = {
  en: {
    header: {
      brand: "James Wang",
      nav: [
        { href: "#services", label: "Services" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
      ],
      primaryCta: "Start a project",
      mobileCta: "Book a call",
      menuToggleLabel: "Toggle navigation",
      languageToggleLabel: "Switch to Chinese"
    },
    hero: {
      badge: "Product Designer · Front-end Engineer",
      heading: "Transform complex workflows into delightful digital experiences",
      description:
        "I partner with B2B and SaaS teams to build end-to-end design and front-end systems grounded in measurable outcomes.",
      primaryCta: "Book a strategy call",
      secondaryCta: "View recent work",
      highlight: {
        name: "James Wang",
        role: "Product Designer & Front-end Engineer",
        quote:
          "A decade of cross-disciplinary experience shipping for finance, enterprise, and AI teams with a balance of craft and velocity."
      }
    },
    services: {
      eyebrow: "Services",
      title: "End-to-end product partnerships",
      description:
        "Strategy, experience, and engineering support to help your team move from idea to measurable impact.",
      learnMore: "Learn more"
    },
    skills: {
      eyebrow: "Skills",
      title: "A multidisciplinary toolkit",
      description:
        "Grounded in strategy, experience, and engineering to ensure every launch is elegant and sustainable."
    },
    projects: {
      eyebrow: "Case Studies",
      title: "Selected projects",
      description:
        "Recent strategy, design, and engineering engagements across B2B, finance, and enterprise platforms.",
      viewCaseStudy: "View case study"
    },
    cta: {
      heading: "Let's build your next flagship product",
      description:
        "I help fast-moving teams validate ideas, refine experiences, and ship resilient front-end implementations.",
      primaryAction: {
        label: "Book a strategy call",
        href: "mailto:hello@jameswang.design?subject=Project%20inquiry"
      },
      secondaryAction: {
        label: "Download portfolio PDF",
        href: "https://cdn.jameswang.design/portfolio.pdf"
      }
    },
    contact: {
      eyebrow: "Contact",
      title: "Schedule a project intro",
      description: "Share your goals and timeline—I'll respond within 24 hours.",
      fields: {
        name: { label: "Name", placeholder: "James Wang" },
        email: { label: "Email", placeholder: "hello@jameswang.design" },
        company: { label: "Company / Team", placeholder: "James Wang Studio" },
        message: {
          label: "Project summary",
          placeholder: "Tell me about your challenges, goals, and timeline."
        }
      },
      submit: {
        idle: "Submit project request",
        submitting: "Sending..."
      },
      success: "Thanks! I'll be in touch shortly.",
      error: "Something went wrong. Please try again or reach out via email."
    },
    footer: {
      studioName: "James Wang Studio",
      rights: "All rights reserved.",
      links: [
        { href: "mailto:hello@jameswang.design", label: "hello@jameswang.design" },
        { href: "https://dribbble.com/jameswang", label: "Dribbble" },
        { href: "https://www.linkedin.com/in/jameswang", label: "LinkedIn" }
      ]
    },
    meta: {
      homeTitle: "James Wang · Product Designer & Front-end Engineer"
    }
  },
  zh: {
    header: {
      brand: "王军",
      nav: [
        { href: "#services", label: "服务" },
        { href: "#skills", label: "技能" },
        { href: "#projects", label: "案例" },
        { href: "#contact", label: "联系" }
      ],
      primaryCta: "立即合作",
      mobileCta: "预约咨询",
      menuToggleLabel: "切换导航",
      languageToggleLabel: "切换至英文"
    },
    hero: {
      badge: "产品设计师 · 前端工程师",
      heading: "让复杂业务，化为令人愉悦的数字体验",
      description:
        "我帮助 B2B 与 SaaS 团队搭建从策略到落地的一站式设计与前端体系，以可衡量的业务指标驱动产品持续迭代。",
      primaryCta: "预约策略会议",
      secondaryCta: "查看项目案例",
      highlight: {
        name: "王军",
        role: "产品设计师 & 前端工程师",
        quote: "十年跨学科经验，服务于金融、企业服务与 AI 等行业，为团队带来兼顾体验与效率的产品方案。"
      }
    },
    services: {
      eyebrow: "服务",
      title: "端到端的产品设计服务",
      description: "结合策略、体验与工程化能力，为团队提供可落地的端到端解决方案。",
      learnMore: "深入了解"
    },
    skills: {
      eyebrow: "技能",
      title: "跨学科的核心技能组合",
      description: "深耕策略、体验与工程三大领域，确保每一次交付既优雅又可持续迭代。"
    },
    projects: {
      eyebrow: "案例研究",
      title: "代表项目",
      description: "精选近年的战略咨询、体验设计与工程化落地项目，覆盖 B2B、金融与企业服务等行业。",
      viewCaseStudy: "查看详细案例"
    },
    cta: {
      heading: "一起打造下一款标杆产品",
      description: "我帮助高速成长的团队验证想法、打磨体验，并将设计落地为稳定可维护的前端交付。",
      primaryAction: {
        label: "预约策略会议",
        href: "mailto:hello@jameswang.design?subject=%E6%9D%A5%E8%81%94%E7%B3%BB%E5%90%88%E4%BD%9C"
      },
      secondaryAction: {
        label: "下载作品集 PDF",
        href: "https://cdn.jameswang.design/portfolio.pdf"
      }
    },
    contact: {
      eyebrow: "联系",
      title: "预约咨询或合作",
      description: "留下项目信息与目标，我会在 24 小时内与您取得联系。",
      fields: {
        name: { label: "姓名", placeholder: "王军" },
        email: { label: "邮箱", placeholder: "hello@jameswang.design" },
        company: { label: "公司 / 团队", placeholder: "王军工作室" },
        message: {
          label: "项目简介",
          placeholder: "请描述当前的挑战、目标与时间计划。"
        }
      },
      submit: {
        idle: "提交需求",
        submitting: "发送中..."
      },
      success: "信息已提交，我们会尽快联系您。",
      error: "提交失败，请稍后重试或通过邮箱联系。"
    },
    footer: {
      studioName: "王军工作室",
      rights: "保留所有权利。",
      links: [
        { href: "mailto:hello@jameswang.design", label: "hello@jameswang.design" },
        { href: "https://dribbble.com/jameswang", label: "Dribbble" },
        { href: "https://www.linkedin.com/in/jameswang", label: "LinkedIn" }
      ]
    },
    meta: {
      homeTitle: "王军 · 产品设计师 & 前端工程师"
    }
  }
};

export const getCopy = (language: Language): Copy => copy[language];
