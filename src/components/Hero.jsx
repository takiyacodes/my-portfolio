
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="flex min-h-[calc(100svh-4rem)] items-center px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-6">
          <p className="text-lg font-medium text-teal-700">Hi,</p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            My name is{' '}
            <span className="text-teal-600">Takiya Jahan Prome</span>
          </h1>
          <h2 className="text-2xl font-semibold text-slate-700 sm:text-3xl">
            Full-stack developer
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            I build full-stack web products with React, Next.js, and the MERN stack, with a strong applied background in machine learning and deep learning. I ship faster by working with AI as part of my process, not around it.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              View my projects <HiArrowRight aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-teal-600 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Get in touch <HiArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-3 text-slate-600">
            <a
              href="https://github.com/takiyacodes"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-xl transition hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://bd.linkedin.com/in/takiya-jahan-prome-80164b443"
              target="_blank"
              rel="noreferrer"
              aria-label="Search for Takiya Jahan Prome on LinkedIn"
              className="text-xl transition hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <span className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-teal-700" aria-hidden="true" />
              Dhaka, Bangladesh
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px] lg:justify-self-end">
          <div className="absolute -inset-3 -rotate-3 rounded-lg bg-teal-100" aria-hidden="true" />
          <img
            src="/Polished%20Peach-Toned%20Studio%20Headshot.png"
            alt="Takiya Jahan Prome"
            className="relative aspect-[4/5] w-full rounded-lg border border-white object-cover object-[50%_30%] shadow-xl"
          />
          <div className="absolute bottom-4 left-4 rounded-md bg-white/95 px-4 py-3 shadow-md sm:-left-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Based in</p>
            <p className="mt-1 font-semibold text-slate-900">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;