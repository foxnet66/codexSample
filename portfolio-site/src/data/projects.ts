import { Language } from "@/i18n/language";

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  year: number;
};

const image = "/images/projects/placeholder.svg";

const projectsByLanguage: Record<Language, Project[]> = {
  en: [
    {
      id: "aurora-ui",
      title: "Aurora UI Kit",
      description:
        "A comprehensive component library that accelerates product teams with accessible, themeable UI primitives.",
      technologies: ["React", "Tailwind CSS", "Storybook"],
      link: "https://aurora-ui.example.com",
      image,
      year: 2024
    },
    {
      id: "flowbank",
      title: "FlowBank Mobile",
      description:
        "End-to-end redesign of a mobile banking app, improving activation by 32% through simplified onboarding flows.",
      technologies: ["Next.js", "TypeScript", "Figma"],
      link: "https://flowbank.example.com",
      image,
      year: 2023
    },
    {
      id: "orbit-analytics",
      title: "Orbit Analytics Dashboard",
      description:
        "Responsive analytics platform with modular data visualizations and granular permissions for enterprise teams.",
      technologies: ["D3.js", "Node.js", "GraphQL"],
      link: "https://orbit-analytics.example.com",
      image,
      year: 2022
    }
  ],
  zh: [
    {
      id: "aurora-ui",
      title: "Aurora UI 组件库",
      description:
        "一套完整的组件库，通过可访问、可主题化的基础组件帮助产品团队快速迭代。",
      technologies: ["React", "Tailwind CSS", "Storybook"],
      link: "https://aurora-ui.example.com",
      image,
      year: 2024
    },
    {
      id: "flowbank",
      title: "FlowBank 移动银行",
      description:
        "对移动银行 App 的端到端重设计，通过简化注册流程将激活率提升 32%。",
      technologies: ["Next.js", "TypeScript", "Figma"],
      link: "https://flowbank.example.com",
      image,
      year: 2023
    },
    {
      id: "orbit-analytics",
      title: "Orbit 数据分析平台",
      description:
        "响应式数据分析平台，提供模块化可视化与精细化权限管理，服务企业级团队。",
      technologies: ["D3.js", "Node.js", "GraphQL"],
      link: "https://orbit-analytics.example.com",
      image,
      year: 2022
    }
  ]
};

export const getProjects = (language: Language): Project[] => projectsByLanguage[language];
