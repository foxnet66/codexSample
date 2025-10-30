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
      badge: "AWS Solutions Architect · Full-stack Engineer",
      heading: "Design resilient cloud products end to end",
      description:
        "I partner with startups and enterprises to architect AWS infrastructure, build full-stack applications, and ship measurable outcomes.",
      primaryCta: "Book a strategy call",
      secondaryCta: "View recent work",
      highlight: {
        name: "James Wang",
        role: "AWS Solutions Architect & Full-stack Engineer",
        quote:
          "A decade of architecting secure, scalable platforms for finance, enterprise, and AI teams—balancing speed, governance, and developer experience."
      }
    },
    services: {
      eyebrow: "Services",
      title: "Cloud architecture & product delivery",
      description:
        "Strategic planning, AWS architecture, and application engineering to guide your team from idea to production.",
      learnMore: "Learn more"
    },
    skills: {
      eyebrow: "Skills",
      title: "A multidisciplinary toolkit",
      description:
        "AWS expertise, application architecture, and developer experience to keep every launch resilient and maintainable."
    },
    projects: {
      eyebrow: "Case Studies",
      title: "Selected projects",
      description:
        "Recent cloud architecture and full-stack delivery engagements across B2B, finance, and enterprise platforms.",
      viewCaseStudy: "View case study"
    },
    cta: {
      heading: "Let's build your next cloud-native product",
      description:
        "I help fast-moving teams design AWS architectures, accelerate development, and ship reliable full-stack experiences.",
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
      homeTitle: "James Wang · AWS Solutions Architect & Full-stack Engineer"
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
      badge: "AWS 解决方案架构师 · 全栈工程师",
      heading: "端到端打造稳健的云端产品",
      description:
        "我帮助初创与企业团队规划 AWS 架构、构建全栈应用，并以可衡量的业务目标驱动交付。",
      primaryCta: "预约策略会议",
      secondaryCta: "查看项目案例",
      highlight: {
        name: "王军",
        role: "AWS 解决方案架构师 & 全栈工程师",
        quote: "十年云架构与工程化实践经验，服务于金融、企业服务与 AI 团队，兼顾安全、效率与治理。"
      }
    },
    services: {
      eyebrow: "服务",
      title: "云架构与产品落地服务",
      description: "提供策略规划、AWS 架构设计与应用工程化能力，助力团队快速从构想到上线。",
      learnMore: "深入了解"
    },
    skills: {
      eyebrow: "技能",
      title: "跨领域的核心能力组合",
      description: "深耕 AWS 专业知识、应用架构与开发者体验，确保每次交付都稳定且易于维护。"
    },
    projects: {
      eyebrow: "案例研究",
      title: "代表项目",
      description: "精选近年的云架构与全栈交付项目，覆盖 B2B、金融与企业服务等行业。",
      viewCaseStudy: "查看详细案例"
    },
    cta: {
      heading: "一起打造下一款云原生产品",
      description: "我帮助高速成长的团队设计 AWS 架构、加速开发，并交付可靠的全栈体验。",
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
      homeTitle: "王军 · AWS 解决方案架构师 & 全栈工程师"
    }
  }
};

export const getCopy = (language: Language): Copy => copy[language];
