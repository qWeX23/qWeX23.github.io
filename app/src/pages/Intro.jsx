import PropTypes from "prop-types";

export default function Intro({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center qwex-hero px-4 py-12 sm:p-8 text-center animate-fade-in-up"
    >
      <h1 className="qwex-title font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[var(--qwex-fs-xxl)] leading-tight">
        I am Benjamin Churchill
      </h1>
      <p className="max-w-prose text-[var(--qwex-muted)] text-sm sm:text-base md:text-lg mt-4">
        Software Engineer | Full-stack Developer | Problem Solver
      </p>
    </section>
  );
}

Intro.propTypes = {
  id: PropTypes.string.isRequired,
};
