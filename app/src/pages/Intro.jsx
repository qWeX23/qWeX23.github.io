export default function Intro({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-4xl font-bold">I am Benjamin Churchill</h1>
      <p className="max-w-prose">
        I am a software engineer with 10 years experience specializing in
        backend and data engineering.
      </p>
    </section>
  );
}
