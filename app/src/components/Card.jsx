import PropTypes from "prop-types";

export default function Card({ children, className = "", contentClassName = "", style }) {
  return (
    <div className={`qwex-card group relative overflow-hidden ${className}`} style={style}>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--qwex-accent)] to-[var(--qwex-accent-2)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      <div className={`relative z-10 p-4 sm:p-6 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  style: PropTypes.object,
};
