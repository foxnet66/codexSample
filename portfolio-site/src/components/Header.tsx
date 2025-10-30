import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "服务" },
  { href: "#skills", label: "技能" },
  { href: "#projects", label: "案例" },
  { href: "#contact", label: "联系" }
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onHashChange = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/90 shadow-lg backdrop-blur" : "bg-white/40 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-neutral-900">
          Jane Doe
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neutral-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark md:inline-flex"
          >
            立即合作
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 p-2 text-neutral-700 md:hidden"
            aria-label="切换导航"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-neutral-200 bg-white/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-700">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-neutral-900">
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-white"
            >
              预约咨询
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
