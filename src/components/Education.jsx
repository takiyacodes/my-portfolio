const Education = () => {
  return (
    <section id="education" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Education</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Learning that shapes my work</h2>
        <article className="mt-8 grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:items-start sm:gap-7 sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-teal-50 text-lg font-bold text-teal-800" aria-hidden="true">AM</div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Master’s degree</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Political Science</h3>
            <p className="mt-2 text-base font-medium text-slate-700">Ananda Mohan College, Mymensingh</p>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">Completed my master’s studies in Political Science, developing a broader perspective on people, communities, and the systems that shape everyday life.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;