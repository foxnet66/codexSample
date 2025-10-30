import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-white to-primary/5" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-32 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary-dark">
            产品设计师 · 前端工程师
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            让复杂业务，化为令人愉悦的数字体验
          </h1>
          <p className="text-lg text-neutral-600 md:text-xl">
            我帮助 B2B 与 SaaS 团队搭建从策略到落地的一站式设计与前端体系，以可衡量的业务指标驱动产品持续迭代。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:bg-primary-dark"
            >
              预约免费咨询
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:border-primary hover:text-primary"
            >
              查看项目案例
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary/20" />
              <div>
                <p className="text-sm font-medium text-neutral-500">Jane Doe</p>
                <p className="text-lg font-semibold text-neutral-900">产品设计师 & 前端工程师</p>
              </div>
            </div>
            <p className="text-neutral-600">
              “十年跨学科经验，服务于金融、企业服务与 AI 等行业，为团队带来兼顾体验与效率的产品方案。”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
