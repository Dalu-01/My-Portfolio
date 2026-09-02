import React, { useState } from "react";

const CONTACT_LINES = [
  {
    label: "Email",
    value: "unzuluel@gmail.com",
    href: "mailto:unzuluel@gmail.com",
  },
  { label: "GitHub", value: "Dalu-01", href: "https://github.com/Dalu-01" },
  // { label: 'Design enquiries', value: 'Dalu GraphiX', href: '#' },
  {
    label: "Content",
    value: "@Mluememes",
    href: "https://www.youtube.com/@Mluememes",
  },
  {
    label: "Facebook",
    value: "DaluGraphiXX",
    href: "https://web.facebook.com/DaluGraphiXX/",
  },
];

export function Contact() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = async (
    e: React.MouseEvent,
    value: string,
    label: string,
    href: string,
  ) => {
    // Only stop navigation if it's a dummy link or a mailto link
    if (href === "#" || href.startsWith("mailto:")) {
      e.preventDefault();
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      setTimeout(() => setCopiedLabel(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end px-6 md:px-16 py-20 md:py-28 border-t border-line"
    >
      <div>
        <div className="section-label" data-num="04">
          Contact
        </div>
        <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight text-ink reveal">
          Let's build
          <br />
          something
          <br />
          <em className="italic text-ink-2">worth making.</em>
        </h2>
      </div>

      <div
        className="flex flex-col gap-6 pb-1 reveal"
        style={{ transitionDelay: "0.1s" }}
      >
        {CONTACT_LINES.map((line) => {
          const isCopied = copiedLabel === line.label;

          return (
            <div key={line.label} className="contact-line">
              <span className="text-[0.65rem] tracking-wider uppercase text-ink-3">
                {line.label}
              </span>
              <a
                href={line.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  handleCopy(e, line.value, line.label, line.href)
                }
                className={`text-ink hover:text-ink-2 no-underline transition-colors cursor-pointer select-none ${
                  isCopied ? "text-emerald-500 font-medium" : ""
                }`}
                title="Click to copy and open link"
              >
                {isCopied ? "Copied!" : line.value}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}












































// const CONTACT_LINES = [
//   { label: 'Email', value: 'unzuluel@gmail.com', href: 'mailto:unzuluel@gmail.com' },
//   { label: 'GitHub', value: 'Github.com/Dalu-01', href: 'https://github.com/Dalu-01' },
//   // { label: 'Design enquiries', value: 'Dalu GraphiX', href: '#' },
//   { label: 'Content', value: '@RobbyLoreDude', href: '#' },
//   { label: 'Facebook', value: 'DaluGraphiX', href: '#' },
// ]

// export function Contact() {
//   return (
//     <section
//       id="contact"
//       className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end px-6 md:px-16 py-20 md:py-28 border-t border-line"
//     >
//       <div>
//         <div className="section-label" data-num="04">
//           Contact
//         </div>
//         <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight text-ink reveal">
//           Let's build
//           <br />
//           something
//           <br />
//           <em className="italic text-ink-2">worth making.</em>
//         </h2>
//       </div>

//       <div className="flex flex-col gap-6 pb-1 reveal" style={{ transitionDelay: '0.1s' }}>
//         {CONTACT_LINES.map((line) => (
//           <div key={line.label} className="contact-line">
//             <span className="text-[0.65rem] tracking-wider uppercase text-ink-3">
//               {line.label}
//             </span>
//             <a
//               href={line.href}
//               className="text-ink hover:text-ink-2 no-underline transition-colors"
//             >
//               {line.value}
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
