export default function About({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center animate-fade-in-up"
    >
      <div className="qwex-hero">
        <h1 className="text-4xl font-bold">👤 About</h1>
        <p className="text-lg opacity-80">The human behind the code</p>
      </div>

      <div className="qwex-card group relative overflow-hidden max-w-2xl">
        {/* Hacker-style accent border */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--qwex-accent)] to-[var(--qwex-accent-2)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        <div className="relative z-10 p-6">
          <div className="mb-6">
            <img
              src="/headshot.JPG"
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover mx-auto border-2 border-[var(--qwex-border)] group-hover:border-[var(--qwex-accent)] transition-colors duration-300"
            />
          </div>

          <p className="text-[var(--qwex-muted)] leading-relaxed mb-4">
            fullstack software engineer with expertise in backend systems. if
            i'm not hacking on a new project, you can find me in the garden, or
            at the board game table
          </p>

          <div className="text-sm text-[var(--qwex-accent-2)] opacity-80">
            coding • gardening • board games
          </div>
        </div>
      </div>
    </section>
  );
}
