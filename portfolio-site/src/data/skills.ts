export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    id: "research",
    title: "产品与研究",
    skills: ["用户访谈", "产品路线规划", "指标体系设计", "A/B 测试"]
  },
  {
    id: "design",
    title: "设计与原型",
    skills: ["信息架构", "交互原型", "设计系统", "可访问性"]
  },
  {
    id: "engineering",
    title: "前端工程",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "CICD"]
  }
];
