import PropTypes from "prop-types";

export default function SectionHeader({ emoji, title, subtitle }) {
  return (
    <div className="qwex-hero">
      <h1 className="qwex-title text-2xl sm:text-3xl md:text-4xl font-semibold">
        {emoji} {title}
      </h1>
      <p className="text-base sm:text-lg opacity-80 mt-2">{subtitle}</p>
    </div>
  );
}

SectionHeader.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
