import useInViewAnimation from '../useInViewAnimation';

export default function About({ id }) {
  const ref = useInViewAnimation('animate-fade-in-up');
  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center opacity-0"
    >
      <h1 className="text-4xl font-bold">About</h1>
      <p>
        I am a software engineer with expertise in backend and data engineering.
      </p>
    </section>
  );
}
