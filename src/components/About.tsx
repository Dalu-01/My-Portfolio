const PILLARS = [
  { title: "Build", value: "Development" },
  { title: "Design", value: "Dalu GraphiXX" },
  { title: "Create", value: "Muny_Memes" },
];

export function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 md:py-28 border-t border-line"
    >
      <div className="section-label" data-num="01">
        About
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-24 items-start">
        <div className="reveal">
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">
            A builder
            <br />
            who doesn't
            <br />
            <em className="italic text-ink-2">pick a lane.</em>
          </h2>
        </div>

        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <div className="text-ink-2 leading-loose font-light text-[1.05rem] space-y-5">
            <p>
              I'm Dalu — a fullstack developer, graphic designer, and content
              creator based in Lagos. I work across the MERN stack (React,
              Node.js, Express, MongoDB) with TypeScript, and I run Dalu
              GraphiX, a design business serving churches, ministries, and
              businesses.
            </p>
            <p>
              Outside of client work, I build my own products — currently
              CineTrack, a cinematic movie discovery app — and run
              RobbyLoreDude, a Roblox-themed shorts channel with a fact-rant
              format on YouTube, TikTok, Instagram, and Facebook and i also run
              Muny_Memes, also a YouTube Shorts channel with a meme-themed
              visual style and format. options-image-video-meme structure,
              Cross-posted on YouTube
            </p>
            <p>
              The thread connecting everything: I like making things people
              actually use and enjoy.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-12 pt-12 border-t border-line">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex-1">
                <div className="text-[0.7rem] tracking-wider uppercase text-ink-3 mb-1">
                  {pillar.title}
                </div>
                <div className="font-display text-lg tracking-tight text-ink">
                  {pillar.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
