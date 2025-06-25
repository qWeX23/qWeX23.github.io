export default function About({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-4xl font-bold">About</h1>
      <p className="max-w-prose">
        fullstack software engineer with expertise in backend systems. if i'm
        not hacking on a new project, you can find me in the garden, or at the
        board game table{" "}
      </p>
    </section>
  );
}
