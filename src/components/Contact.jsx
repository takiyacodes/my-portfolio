import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowRight, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#123b36] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-200">Let’s connect</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
          <p className="mt-4 leading-7 text-teal-50/80">I’m open to thoughtful collaborations and new opportunities. Reach out and let’s make something useful together.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:takiyajahanprome817@gmail.com" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-[#123b36] transition hover:bg-teal-50">
              Email me <HiArrowRight aria-hidden="true" />
            </a>
            <a href="https://github.com/takiyacodes" target="_blank" rel="noreferrer" aria-label="Visit Takiya's GitHub profile" className="inline-flex min-h-12 w-12 items-center justify-center rounded-md border border-white/40 text-xl transition hover:bg-white/10">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://bd.linkedin.com/in/takiya-jahan-prome-80164b443" target="_blank" rel="noreferrer" aria-label="Visit Takiya's LinkedIn profile" className="inline-flex min-h-12 w-12 items-center justify-center rounded-md border border-white/40 text-xl transition hover:bg-white/10">
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="grid gap-5 border-t border-white/20 pt-6 sm:grid-cols-2 md:border-t-0 md:pt-0">
          <a href="mailto:takiyajahanprome817@gmail.com" className="flex min-w-0 items-start gap-3 text-teal-50 transition hover:text-white">
            <HiOutlineMail className="mt-0.5 shrink-0 text-xl text-teal-200" aria-hidden="true" />
            <span className="min-w-0"><span className="block text-sm text-teal-200">Email</span><span className="break-all font-medium">takiyajahanprome817@gmail.com</span></span>
          </a>
          <a href="tel:+8801775577866" className="flex items-start gap-3 text-teal-50 transition hover:text-white">
            <HiOutlinePhone className="mt-0.5 shrink-0 text-xl text-teal-200" aria-hidden="true" />
            <span><span className="block text-sm text-teal-200">Phone</span><span className="font-medium">01775577866</span></span>
          </a>
          <div className="flex items-start gap-3 text-teal-50 sm:col-span-2">
            <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-xl text-teal-200" aria-hidden="true" />
            <span><span className="block text-sm text-teal-200">Location</span><span className="font-medium">Dhaka, Bangladesh</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;