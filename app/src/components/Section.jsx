import PropTypes from "prop-types";

export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-12 sm:p-8 text-center animate-fade-in-up ${className}`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
