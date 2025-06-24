export default function About({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-4xl font-bold">About</h1>
      <p>software engineer with expertise in backend and data engineering</p>
    </section>
  );
}
