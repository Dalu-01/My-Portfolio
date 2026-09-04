import { useScrolled } from "../hooks/useScrolled";
import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const scrolled = useScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <a
        href="#"
        className="font-display text-lg tracking-tight text-ink no-underline uppercase"
      >
        D a l u
      </a>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 list-none">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-ink-2 hover:text-ink text-[0.825rem] uppercase tracking-wider no-underline transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
