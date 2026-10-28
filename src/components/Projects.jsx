import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-slate-200/80 bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Projects I’ve built</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">A few products shaped around real workflows, useful details, and clean experiences.</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={project.id} className="grid overflow-hidden rounded-lg border border-slate-200 bg-[#fbfcfa] lg:grid-cols-2">
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
                <p className="text-sm font-semibold text-teal-700">0{index + 1} <span className="mx-2 text-slate-300">/</span> {project.category}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{project.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600">{technology}</li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800">
                    View live site <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-500">
                    <FaGithub aria-hidden="true" /> Source code
                  </a>
                </div>
              </div>

              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live site`} className="group relative min-h-64 overflow-hidden bg-[#e8eeea] sm:min-h-80 lg:min-h-full">
                <div className="absolute inset-0 p-5 sm:p-8">
                  <div className="h-full overflow-hidden rounded-md border border-slate-300/80 bg-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <div className="flex h-9 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3">
                      <span className="h-2 w-2 rounded-full bg-rose-300" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      <span className="ml-3 h-4 flex-1 rounded-sm bg-white" />
                    </div>
                    <div className="relative flex h-[calc(100%-2.25rem)] min-h-52 flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-[#f2f7f4] to-[#d8ebe4] p-5 sm:p-8">
                      <img
                        src={project.image.startsWith('/') ? project.image : `/${project.image}`}
                        alt={`${project.title} preview`}
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(event) => { event.currentTarget.style.display = 'none'; }}
                      />
                      <span className="relative text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{project.category}</span>
                      <div className="relative max-w-sm">
                        <p className="text-2xl font-bold text-slate-900 sm:text-3xl">{project.title}</p>
                        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">{project.description}</p>
                      </div>
                      <span className="relative inline-flex w-fit items-center gap-2 rounded-md bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700">Explore project <FaExternalLinkAlt aria-hidden="true" /></span>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;