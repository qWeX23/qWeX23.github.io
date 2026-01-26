import PropTypes from "prop-types";

export default function Intro({ id }) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-start qwex-hero px-4 py-8 sm:py-10 text-center animate-fade-in-up"
    >
      <h1 className="qwex-title terminal-cursor font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[var(--qwex-fs-xxl)] leading-tight">
        I am Benjamin Churchill
      </h1>
      <p className="max-w-prose text-[var(--qwex-muted)] text-xs sm:text-sm md:text-base mt-2">
        Software Engineer | Full-stack Developer | Problem Solver
      </p>
    </section>
  );
}

Intro.propTypes = {
  id: PropTypes.string.isRequired,
};
