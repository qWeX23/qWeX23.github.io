const projects = [
  {
    title: "Valeria: Card Kingdoms Score Card",
    description:
      "Help players track their scores. Built with official assets and rules.",
    website: "https://qwex.co/symmetrical-robot/",
    github: "https://github.com/qWeX23/symmetrical-robot",
  },
  {
    title: "The Chicken API (🐔🌐)",
    description: "The open source API for all things chicken.",
    website: "https://chickenapi.com",
    github: "https://github.com/qWeX23/chicken-api",
  },
  {
    title: "Secret Project CA",
    description: "-",
  },
  {
    title: "Project Dot Delta",
    description: "-",
  },
];

export default function Projects({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-12 sm:p-8 text-center animate-fade-in-up"
    >
      <div className="qwex-hero">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">🛠️ Projects</h1>
        <p className="text-base sm:text-lg opacity-80 mt-2">
          Building cool stuff, one repo at a time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl w-full justify-items-center">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="qwex-card group relative overflow-hidden w-full max-w-md"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Hacker-style accent border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--qwex-accent)] to-[var(--qwex-accent-2)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <div className="relative z-10 p-1 sm:p-2">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-[var(--qwex-accent)] transition-colors duration-200">
                {proj.title}
              </h2>
              <p className="text-[var(--qwex-muted)] mb-4 sm:mb-6 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center text-sm sm:text-base">
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
                    <span className="text-xs">🚀</span>
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
                    <span className="text-xs">⚡</span>
                    SOURCE
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
