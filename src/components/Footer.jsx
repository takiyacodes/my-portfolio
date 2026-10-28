import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f8f5] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-600">Built by <span className="font-semibold text-slate-900">Takiya Jahan</span> <span aria-hidden="true">·</span> 2026</p>
        <nav aria-label="Social links" className="flex items-center gap-4">
          <a href="https://github.com/takiyacodes" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-xl text-slate-600 transition hover:text-teal-700"><FaGithub aria-hidden="true" /></a>
          <a href="https://bd.linkedin.com/in/takiya-jahan-prome-80164b443" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-xl text-slate-600 transition hover:text-teal-700"><FaLinkedinIn aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;