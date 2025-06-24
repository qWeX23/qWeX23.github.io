export default function About({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-4xl font-bold">About / Contact</h1>
      <p>
        Contact me at <a className="text-blue-600" href="mailto:bjc9001@gmail.com">bjc9001@gmail.com</a>.
      </p>
      <p>
        <a
          className="text-blue-600"
          href="https://www.linkedin.com/in/bchurchill23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a className="text-blue-600" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume (PDF)
        </a>
      </p>
    </section>
  );
}
