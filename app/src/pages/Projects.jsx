const projects = [
  {
    title: "Valeria: Card Kingdoms Score Card",
    description:
      "Help players track their scores. Built with official assets and rules.",
    website: "https://qwex.co/symmetrical-robot/",
    github: "https://github.com/qWeX23/symmetrical-robot",
    linkedin: "https://www.linkedin.com/in/yourusername/",
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
      className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center animate-fade-in-up"
    >
      <div className="qwex-hero">
        <h1 className="text-4xl font-bold">🛠️ Projects</h1>
        <p className="text-lg opacity-80">
          Building cool stuff, one repo at a time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full justify-items-center">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="qwex-card group relative overflow-hidden w-full max-w-md"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Hacker-style accent border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--qwex-accent)] to-[var(--qwex-accent-2)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-3 group-hover:text-[var(--qwex-accent)] transition-colors duration-200">
                {proj.title}
              </h2>
              <p className="text-[var(--qwex-muted)] mb-6 min-h-[3rem] flex items-center justify-center">
                {proj.description === "-" ? (
                  <span className="text-sm opacity-60">[ CLASSIFIED ]</span>
                ) : (
                  proj.description
                )}
              </p>

              {/* Links Section */}
              <div className="flex justify-center gap-3">
                {proj.website && (
                  <a
                    href={proj.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qwex-btn inline-flex items-center gap-2 text-sm group-hover:shadow-[var(--qwex-shadow-glow)] transition-all duration-200"
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
                    className="qwex-link inline-flex items-center gap-2 px-3 py-2 text-sm border border-[var(--qwex-border)] rounded-lg hover:border-[var(--qwex-accent-2)] hover:bg-[var(--qwex-accent-2)] hover:bg-opacity-10 transition-all duration-200"
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
