import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-[#f7f8f5] text-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-teal-400">Portfolio.</div>
          
          <div className="hidden md:flex items-center justify-center space-x-6 mx-auto">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-teal-400">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-4 py-2 rounded-lg transition"
            >
              Say Hello
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-teal-500 text-slate-950 text-sm font-semibold px-3 py-1.5 rounded-lg"
            >
              Say Hello
            </a>
            <button
              type="button"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="space-y-2 bg-[#f7f8f5] px-4 pt-2 pb-4 md:hidden">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-teal-400"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;