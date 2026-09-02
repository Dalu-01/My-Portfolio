interface Project {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
}

const PROJECTS: Project[] = [
  {
    tag: "Development · ongoing",
    title: "Eventra",
    description:
      "An event-managing platform where people can discover and buy tickets and you can either be an organiser or a user. ",
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Zod",
      "Shad-cn",
      "Tanstack Query",
    ],
    href: "#",
  },
  {
    tag: "Development · ongoing",
    title: "CineTrack",
    description:
      "A movie discovery and tracking app with a Netflix Premium–inspired dark cinematic aesthetic. Powered by TMDB. Built for people who take their watchlists seriously.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "TMDB API"],
    href: "#",
  },

  {
    tag: "Development · finished 2026",
    title: "Task Manager Pro",
    description:
      "A fullstack MERN task manager with JWT authentication, user-scoped tasks, and a soft-delete Trash Page workflow. Built during the Techstudio Internship with a neo-brutalist design system.",
    stack: ["MERN stack", "TypeScript", "JWT",],
    href: "#",
  },
  {
    tag: "Design · Ongoing",
    title: "Dalu GraphiXX",
    description:
      "Graphic design work for churches, ministries, and businesses — event flyers, branded documents, identity materials. Each piece built around the client's brief, not a template.",
    stack: ["Brand Identity", "Print Design", "Canva", "Figma"],
    href: "#",
  },

  {
    tag: "Content · Ongoing",
    title: "Muny_Memes",
    description:
      "A YouTube Shorts channel with a meme-themed visual style and format. options-image-video-meme structure. Cross-posted on YouTube with 6.96K subs and 33.6M views accross the channel.",
    stack: ["YouTube Shorts", "meme", "Video Editing", "Scripting"],
    href: "https://www.youtube.com/@Muny_Memes",
  },

  {
    tag: "Content · Ongoing",
    title: "RobbyLoreDude",
    description:
      "A YouTube Shorts and TikTok channel with a Roblox-themed visual style and fact-rant voiceover format. Hook–Rant–Depth–Callback structure. Cross-posted on YouTube, TikTok, Instagram, and Facebook.",
    stack: ["YouTube Shorts", "TikTok", "Video Editing", "Scripting"],
    href: "https://www.youtube.com/@RobbyLoreDude",
  },

  {
    tag: "Development · Finished 2026",
    title: "Estatery",
    description:
      "Estatery is a full-stack real estate property listing platform that connects property owners, agents, and potential buyers/renters. The application enables users to browse properties, schedule tours, and manage listings through an intuitive web interface.",
    stack: ["Properties", "Listing", "Buy, Sell & Rent", "Real Estates", 'React', 'Typescript'],
    href: "https://esstatery-front.vercel.app/",
  },
];

export function Work() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-line">
      <div className="section-label px-6 md:px-16" data-num="02">
        Work
      </div>

      <div className="work-grid reveal">
        {PROJECTS.map((project) => (
          <a key={project.title} className="work-card" href={project.href}>
            <div className="text-[0.65rem] tracking-wider uppercase text-ink-3">
              {project.tag}
            </div>
            <div className="font-display text-2xl md:text-[1.65rem] leading-tight tracking-tight text-ink">
              {project.title}
            </div>
            <div className="text-[0.9rem] text-ink-2 leading-relaxed font-light flex-1">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.stack.map((tech) => (
                <span key={tech} className="stack-pill">
                  {tech}
                </span>
              ))}
            </div>
            <span className="work-card-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
