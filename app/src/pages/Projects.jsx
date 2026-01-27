import PropTypes from "prop-types";
import { Card, Section, SectionHeader } from "../components";

const projects = [
  {
    id: "valeria",
    title: "Valeria: Card Kingdoms Score Card",
    description:
      "Official score tracker for Valeria: Card Kingdoms with Duke selection and live scoring.",
    highlights: [
      "Duke selector with portrait art and rule-accurate scoring",
      "Quick +/- counters for resources, monsters, and domain points",
      "Live total score updates for endgame scoring",
      "Built for fast tabletop use on mobile",
    ],
    implementation: [
      "React (Create React App) frontend",
      "Custom Duke scoring engine",
      "Asset-driven UI with official game art",
      "Deployed on GitHub Pages",
    ],
    website: "https://qwex.co/symmetrical-robot/",
    github: "https://github.com/qWeX23/symmetrical-robot",
  },
  {
    id: "chicken-api",
    title: "The Chicken API",
    description:
      "ChickenAPI is an open-source, AI-driven data platform for chicken breeds and individual bird tracking.",
    highlights: [
      "Automated research agents validate and update breed data from real-world sources",
      "Individual chicken identity records (not just static breed metadata)",
      "Dedicated AI agent that discovers, filters, and publishes novel chicken facts",
      "Designed as a public API with transparent data sourcing",
    ],
    implementation: [
      "Kotlin / Spring Boot backend",
      "KOOG agent framework with Ollama as the LLM inference layer",
      "Google Sheets used as a lightweight, auditable datastore",
      "Dockerized deployment on Render",
      "Fully open source on GitHub",
    ],
    website: "https://chickenapi.com",
    github: "https://github.com/qWeX23/chicken-api",
  },
  {
    id: "music-link-swap",
    title: "Music Link Swap",
    emoji: "🎵🔗",
    description: "Convert music links between streaming services.",
    highlights: [
      "Dead simple app to swap between Spotify and Apple Music",
      "Convert links from service to service quickly and easily",
      "Clean, shareable URLs for sending to friends",
      "Raycast extension coming soon",
    ],
    implementation: [
      "Go backend API serving HTML and JSON",
      "HTMX frontend for partial page updates",
      "Custom Spotify/Apple Music link resolver",
      "Self-hosted behind Cloudflare Tunnel",
    ],
    website: "https://music-link-swap.qwex.co/",
  },
  {
    id: "tanks",
    title: "Tanks",
    description:
      "A command center for running AI-driven tank battles.",
    highlights: [
      "Configure Red/Blue commanders with scripted archetypes or LLM-driven strategies",
      "Live battle runs with manual and AI control options",
      "Battle history with detailed match records",
      "Strategy guide with unit roles, tactics, and balance tables",
    ],
    implementation: [
      "HTML5 canvas single-page battle view with custom multi-layer rendering",
      "Server-rendered pages for setup, guide, and history",
      "TypeScript engine and API running on Bun",
      "LLM-driven commanders via Ollama",
      "SQLite for battle storage",
      "Self-hosted behind Cloudflare Tunnel",
    ],
    website: "https://tanks.qwex.co/",
  },
  {
    id: "secret-ca",
    title: "Secret Project CA",
    description: "-",
  },
  {
    id: "dot-delta",
    title: "Project Dot Delta",
    description: "-",
  },
];

export default function Projects({ id }) {
  return (
    <Section id={id}>
      <SectionHeader
        title="Projects"
        subtitle="Building cool stuff, one repo at a time"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 max-w-5xl w-full justify-items-center">
        {projects.map((proj, index) => {
          const hasDetails = Boolean(
            (proj.highlights && proj.highlights.length) ||
              (proj.implementation && proj.implementation.length)
          );

          return (
            <Card
              key={proj.id}
              className="w-full max-w-md"
              contentClassName="p-1 sm:p-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-[var(--qwex-accent)] transition-colors duration-200">
                {proj.title}
              </h2>
              <p
                className={`text-[var(--qwex-muted)] mb-3 sm:mb-4 text-xs sm:text-sm ${
                  hasDetails
                    ? "text-left"
                    : "min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center"
                }`}
              >
                {proj.description === "-" ? (
                  <span className="text-xs sm:text-sm opacity-60">[ CLASSIFIED ]</span>
                ) : (
                  proj.description
                )}
              </p>

              {proj.highlights && proj.highlights.length > 0 && (
                <ul className="text-[var(--qwex-muted)] text-xs sm:text-sm space-y-1 sm:space-y-1.5 mb-3 sm:mb-5 text-left">
                  {proj.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="text-[var(--qwex-accent)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {proj.implementation && proj.implementation.length > 0 && (
                <div className="mb-3 sm:mb-4 text-left border-t border-[var(--qwex-border)] pt-3 sm:pt-4">
                  <p className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-[var(--qwex-muted)] mb-2">
                    Implementation
                  </p>
                  <ul className="text-[var(--qwex-muted)] text-xs sm:text-sm space-y-1 sm:space-y-1.5">
                    {proj.implementation.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="text-[var(--qwex-accent-2)]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links Section */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {proj.website && (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${proj.title} website (opens in new tab)`}
                    className="qwex-btn inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-2 min-h-[44px] group-hover:shadow-[var(--qwex-shadow-glow)] transition-all duration-200"
                  >
                    VISIT
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${proj.title} source code on GitHub (opens in new tab)`}
                    className="qwex-link inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm min-h-[44px] border border-[var(--qwex-border)] rounded-lg hover:border-[var(--qwex-accent-2)] hover:bg-[var(--qwex-accent-2)] hover:bg-opacity-10 transition-all duration-200 active:scale-95"
                  >
                    SOURCE
                  </a>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};
