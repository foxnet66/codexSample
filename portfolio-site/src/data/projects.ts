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

export const projects: Project[] = [
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
];
