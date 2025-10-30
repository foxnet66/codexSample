export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Jane Doe Studio</p>
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="mailto:hello@janedoe.design" className="hover:text-white">
            hello@janedoe.design
          </a>
          <a href="https://dribbble.com/janedoe" className="hover:text-white">
            Dribbble
          </a>
          <a href="https://www.linkedin.com/in/janedoe" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
