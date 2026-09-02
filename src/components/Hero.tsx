import { IoArrowForward } from "react-icons/io5";

const STATS = [
  { num: "1.5+", label: "Years building" },
  { num: "12+", label: "Projects shipped" },
  { num: "3", label: "Creative lanes" },
];

export function Hero() {
  return (
    <div
      data-hero
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-6 md:px-16 pt-20 md:pt-24"
    >
      <div className="pb-16 md:pb-24 reveal">
        <p className="eyebrow mb-7">Based in Lagos, Nigeria</p>
        <h1 className="text-[3.5rem] md:text-[6rem] leading-[1.0] tracking-tight text-ink mb-6">
          <h5 className="font-mono">I build,</h5>
          <em className="italic text-ink-2 font-display">design</em>,
          <br />
          <h5 className="font-serif">and create.</h5>
        </h1>
        <p className="text-ink-2 max-w-[34ch] leading-relaxed mb-10 font-light text-[1.05rem]">
          Fullstack developer, graphic designer, and content creator — making
          things people actually use and enjoy.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-2.5 bg-ink text-bg px-7 py-3.5 text-[0.85rem] font-medium tracking-wide no-underline hover:opacity-80 hover:-translate-y-0.5 transition-all"
        >
          View my work
          <IoArrowForward />
        </a>
      </div>

      <div
        className="flex flex-row md:flex-col flex-wrap gap-8 md:gap-4 items-start md:items-end pt-0 md:pt-8 pb-0 md:pb-24 reveal"
        style={{ transitionDelay: "0.15s" }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} className="contents md:block">
            <div className="text-left md:text-right">
              <div className="font-display text-[3.5rem] leading-none tracking-tight text-ink">
                {stat.num}
              </div>
              <div className="text-[0.75rem] tracking-wider uppercase text-ink-3 mt-1">
                {stat.label}
              </div>
            </div>
            {i < STATS.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-line self-end" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
