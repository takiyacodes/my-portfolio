import { FaNodeJs, FaReact } from 'react-icons/fa';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building responsive, engaging interfaces',
    skills: [
      { name: 'React', Icon: FaReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend & data',
    description: 'Creating reliable application foundations',
    skills: [
      { name: 'Node.js', Icon: FaNodeJs },
      { name: 'MongoDB', Icon: SiMongodb },
    ],
  },
  {
    title: 'Authentication',
    description: 'Secure sign-in and user experiences',
    skills: [{ name: 'Better Auth', Icon: HiOutlineShieldCheck }],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">What I work with</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Skills & technologies</h2>
          <p className="mt-4 leading-7 text-slate-600">A practical toolkit for taking a product from its first interface to a working, connected application.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{group.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map(({ name, Icon }) => (
                  <li key={name} className="inline-flex items-center gap-2 rounded-md bg-[#f2f6f3] px-3 py-2 text-sm font-medium text-slate-700">
                    <Icon className="text-base text-teal-700" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;