import PropTypes from "prop-types";
import { Card, Section, SectionHeader } from "../components";

export default function About({ id }) {
  return (
    <Section id={id}>
      <SectionHeader
        emoji="👤"
        title="About"
        subtitle="The human behind the code"
      />

      <Card className="max-w-2xl mx-4 sm:mx-0">
        <div className="mb-4 sm:mb-6">
          <img
            src="/headshot.JPG"
            alt="Profile"
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover mx-auto border-2 border-[var(--qwex-border)] group-hover:border-[var(--qwex-accent)] transition-colors duration-300"
          />
        </div>

        <p className="text-[var(--qwex-muted)] leading-relaxed mb-4 text-sm sm:text-base">
          fullstack software engineer with expertise in backend systems. if
          i'm not hacking on a new project, you can find me in the garden, or
          at the board game table
        </p>

        <div className="text-xs sm:text-sm text-[var(--qwex-accent-2)] opacity-80">
          coding • gardening • board games
        </div>
      </Card>
    </Section>
  );
}

About.propTypes = {
  id: PropTypes.string.isRequired,
};
