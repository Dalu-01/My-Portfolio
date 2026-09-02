import { GiHamburgerMenu } from "react-icons/gi";
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

      {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="absolute top-full w-full bg-[#f7f6f3d9] border-b border-outline md:hidden z-40 transition-all duration-300 ease-out transform">
            <ul className="flex flex-col p-4 gap-4 list-none">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink-2 block py-2 hover:text-ink transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

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
          className="p-2 text-ink-3 hover:text-ink transition-colors"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}
