import { FormEvent, useState } from "react";
import { getCopy } from "@/data/copy";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "./SectionHeading";

type FormState = "idle" | "submitting" | "success" | "error";

export const ContactSection = () => {
  const [status, setStatus] = useState<FormState>("idle");
  const { language } = useLanguage();
  const { contact } = getCopy(language);

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
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
          align="center"
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto grid w-full max-w-3xl gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                {contact.fields.name.label}
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={contact.fields.name.placeholder}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                {contact.fields.email.label}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={contact.fields.email.placeholder}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm font-medium text-neutral-700">
              {contact.fields.company.label}
            </label>
            <input
              id="company"
              name="company"
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={contact.fields.company.placeholder}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-700">
              {contact.fields.message.label}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={contact.fields.message.placeholder}
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? contact.submit.submitting : contact.submit.idle}
          </button>
          {status === "success" && (
            <p className="text-center text-sm text-emerald-600">{contact.success}</p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-500">{contact.error}</p>
          )}
        </form>
      </div>
    </section>
  );
};
