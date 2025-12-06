import { useState, useEffect } from "react";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const navItems = [
  { href: "#intro", label: "Intro", emoji: "🚀" },
  { href: "#projects", label: "Projects", emoji: "🛠️" },
  { href: "#blog", label: "Blog", emoji: "📚" },
  { href: "#about", label: "About", emoji: "👤" },
  { href: "#contact", label: "Contact", emoji: "✉️" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 qwex-nav py-3 md:py-4 px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} data-emoji={item.emoji}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Header */}
        <div className="md:hidden flex items-center justify-between">
          <a
            href="#intro"
            className="text-[var(--qwex-accent)] font-bold text-lg"
            onClick={handleNavClick}
          >
            BC
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="qwex-hamburger p-2 -mr-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className={`hamburger-lines ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <ul
            className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, index) => (
              <li
                key={item.href}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <a href={item.href} onClick={handleNavClick}>
                  <span className="text-xl mr-3">{item.emoji}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Intro id="intro" />
      <Projects id="projects" />
      <Blog id="blog" />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
}
