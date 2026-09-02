const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT Auth'],
  },
  {
    title: 'Design',
    items: ['Brand identity', 'Print & digital', 'Figma', 'Canva', 'Typography'],
  },
  {
    title: 'Content & Tools',
    items: ['Video scripting', 'Short-form editing', 'vidIQ / SEO', 'Git & GitHub', 'Vercel / Netlify'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-20 md:py-28 border-t border-line">
      <div className="section-label" data-num="03">
        Skills &amp; stack
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 reveal">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <div className="text-[0.7rem] tracking-wider uppercase text-ink-3 mb-5 pb-3 border-b border-line">
              {group.title}
            </div>
            <ul className="list-none flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-[0.9rem] text-ink-2 font-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
