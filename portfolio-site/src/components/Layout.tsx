import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};
