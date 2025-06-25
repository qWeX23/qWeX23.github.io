export default function Intro({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-4xl font-bold">I am Benjamin Churchill</h1>
      <p className="max-w-prose">Software Engineer</p>
    </section>
  );
}
