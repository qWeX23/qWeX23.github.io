export default function Intro({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center qwex-hero p-8 text-center animate-fade-in-up"
    >
      <h1 className="font-bold">🚀 I am Benjamin Churchill</h1>
      <p className="max-w-prose text-[var(--qwex-muted)]">
        Software Engineer | Full-stack Developer | Problem Solver
      </p>
    </section>
  );
}
