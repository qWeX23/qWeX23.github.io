import useInViewAnimation from '../useInViewAnimation';

export default function Contact({ id }) {
  const ref = useInViewAnimation('animate-fade-in-up');
  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center opacity-0"
    >
      <h1 className="text-4xl font-bold">Contact</h1>
      <p>
        <a className="text-blue-600 inline-flex items-center gap-1" href="mailto:bjc9001@gmail.com">
          <MailIcon className="w-5 h-5" /> bjc9001@gmail.com
        </a>
      </p>
      <p>
        <a
          className="text-blue-600 inline-flex items-center gap-1"
          href="https://www.linkedin.com/in/bchurchill23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="w-5 h-5" /> LinkedIn
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

function MailIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338A53.79 53.79 0 010 56a53.79 53.79 0 0153.84-53.8A53.79 53.79 0 01107.68 56a53.79 53.79 0 01-53.84 53.7zM447.9 448h-92.6V302.4c0-34.7-12.7-58.4-44.5-58.4-24.2 0-38.5 16.2-44.8 31.9-2.3 5.5-2.8 13.1-2.8 20.8V448h-92.8s1.2-236.2 0-261.1h92.8V224c12.3-18.8 34.3-45.7 83.5-45.7 61 0 106.7 39.8 106.7 125.2V448z" />
    </svg>
  );
}
