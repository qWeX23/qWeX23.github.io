import PropTypes from "prop-types";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="qwex-hero">
      <h1 className="qwex-title text-lg sm:text-xl md:text-2xl font-semibold">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm sm:text-base opacity-80 mt-1">{subtitle}</p>
      )}
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
