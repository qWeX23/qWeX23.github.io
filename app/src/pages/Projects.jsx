import PropTypes from "prop-types";
import { Card, Section, SectionHeader } from "../components";

const projects = [
  {
    id: "valeria",
    title: "Valeria: Card Kingdoms Score Card",
    description:
      "Help players track their scores. Built with official assets and rules.",
    website: "https://qwex.co/symmetrical-robot/",
    github: "https://github.com/qWeX23/symmetrical-robot",
  },
  {
    id: "chicken-api",
    title: "The Chicken API",
    description: "The open source API for all things chicken.",
    website: "https://chickenapi.com",
    github: "https://github.com/qWeX23/chicken-api",
  },
  {
    id: "music-link-swap",
    title: "Music Link Swap",
    emoji: "🎵🔗",
    description: "Convert music links between streaming services.",
    website: "https://music-link-swap.qwex.co/",
  },
  {
    id: "tanks",
    title: "Tanks",
    description: "real time llm tank showdown",
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
        {projects.map((proj, index) => (
          <Card
            key={proj.id}
            className="w-full max-w-md"
            contentClassName="p-1 sm:p-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
              <h2 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-[var(--qwex-accent)] transition-colors duration-200">
                {proj.title}
              </h2>
            <p className="text-[var(--qwex-muted)] mb-3 sm:mb-4 min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center text-xs sm:text-sm">
              {proj.description === "-" ? (
                <span className="text-xs sm:text-sm opacity-60">[ CLASSIFIED ]</span>
              ) : (
                proj.description
              )}
            </p>

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
        ))}
      </div>
    </Section>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};
