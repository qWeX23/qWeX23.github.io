export default function About({ id }) {
  return (
    <section id={id}>
      <h1>About / Contact</h1>
      <p>
        Contact me at <a href="mailto:bjc9001@gmail.com">bjc9001@gmail.com</a>.
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/bchurchill23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume (PDF)
        </a>
      </p>
    </section>
  );
}
