import PropTypes from "prop-types";
import { Card, Section, SectionHeader } from "../components";

export default function About({ id }) {
  return (
    <Section id={id}>
      <SectionHeader
        title="About"
      />

      <Card className="max-w-2xl mx-4 sm:mx-0">
        <div className="mb-4 sm:mb-6">
          <img
            src="/headshot.JPG"
            alt="Profile"
            className="rounded-sm w-20 h-20 sm:w-24 sm:h-24 object-cover mx-auto border border-[var(--qwex-border)] group-hover:border-[var(--qwex-accent)] transition-colors duration-300"
          />
        </div>

        <p className="text-[var(--qwex-muted)] leading-relaxed mb-3 text-xs sm:text-sm">
          Fullstack software engineer with a backend focus. New father, builder,
          and lifelong tinkerer—when I'm not coding, you'll find me in the
          garden or at the board game table.
        </p>

        <div className="text-xs text-[var(--qwex-accent-2)] opacity-80">
          coding • gardening • board games
        </div>
      </Card>
    </Section>
  );
}

About.propTypes = {
  id: PropTypes.string.isRequired,
};
