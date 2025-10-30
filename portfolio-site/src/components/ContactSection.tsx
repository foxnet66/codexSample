import { FormEvent, useState } from "react";
import { SectionHeading } from "./SectionHeading";

type FormState = "idle" | "submitting" | "success" | "error";

export const ContactSection = () => {
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Contact"
          title="预约咨询或合作"
          description="留下项目信息与目标，我会在 24 小时内与您取得联系。"
          align="center"
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto grid w-full max-w-3xl gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                姓名
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="张女士"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                邮箱
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="hello@company.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm font-medium text-neutral-700">
              公司 / 团队
            </label>
            <input
              id="company"
              name="company"
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Acme Inc."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-700">
              项目简介
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="请描述当前的挑战、目标与时间计划。"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "发送中..." : "提交需求"}
          </button>
          {status === "success" && (
            <p className="text-center text-sm text-emerald-600">信息已提交，我们会尽快联系您。</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-500">提交失败，请稍后重试或通过邮箱联系。</p>
          )}
        </form>
      </div>
    </section>
  );
};
