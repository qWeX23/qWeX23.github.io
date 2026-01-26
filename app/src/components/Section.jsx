import PropTypes from "prop-types";

export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-start gap-4 sm:gap-5 px-4 py-6 sm:py-8 text-center animate-fade-in-up ${className}`}
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
