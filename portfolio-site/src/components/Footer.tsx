import { getCopy } from "@/data/copy";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();
  const { footer } = getCopy(language);

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{footer.studioName}</p>
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} {footer.rights}</p>
        </div>
        <div className="flex gap-6 text-sm text-neutral-400">
          {footer.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
