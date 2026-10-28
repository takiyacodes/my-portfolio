const About = () => {
  return (
    <section id="about" className="scroll-mt-20 border-y border-slate-200/80 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">A little about me</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Curious by nature.<br />Builder by choice.</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          <p>
            I’m Takiya Jahan Prome, a full-stack developer who enjoys turning thoughtful ideas into useful, polished digital products. I work across the stack, from shaping a clear interface to building the systems that make it work.
          </p>
          <p>
            Alongside web development, I have an applied background in machine learning and deep learning. I’m always learning, experimenting with new tools, and finding practical ways to bring technology closer to people.
          </p>
          <a href="#projects" className="inline-flex items-center gap-2 font-semibold text-teal-700 transition hover:text-teal-900">
            Explore my work <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;