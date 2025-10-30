import { getCopy } from "@/data/copy";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  variant?: "default" | "mobile";
  className?: string;
  onToggle?: () => void;
}

export const LanguageToggle = ({ variant = "default", className = "", onToggle }: LanguageToggleProps) => {
  const { language, toggleLanguage } = useLanguage();
  const { header } = getCopy(language);

  const baseClasses =
    variant === "mobile"
      ? "w-full justify-center gap-3 px-4 py-2 text-sm"
      : "justify-between gap-2 px-3 py-1 text-xs uppercase tracking-wide md:text-sm";

  const handleClick = () => {
    toggleLanguage();
    onToggle?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={header.languageToggleLabel}
      className={`flex items-center rounded-full border border-neutral-300 bg-white font-semibold text-neutral-700 shadow-sm transition hover:border-primary hover:text-primary ${baseClasses} ${className}`.trim()}
    >
      <span
        className={`rounded-full px-2 py-0.5 transition ${
          language === "en" ? "bg-primary text-white" : "bg-transparent text-neutral-500"
        }`}
      >
        EN
      </span>
      <span className="text-neutral-300">/</span>
      <span
        className={`rounded-full px-2 py-0.5 transition ${
          language === "zh" ? "bg-primary text-white" : "bg-transparent text-neutral-500"
        }`}
      >
        中文
      </span>
    </button>
  );
};
