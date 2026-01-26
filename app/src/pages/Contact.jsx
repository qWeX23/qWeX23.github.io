import PropTypes from "prop-types";
import { Card, Section, SectionHeader } from "../components";

export default function Contact({ id }) {
  return (
    <Section id={id}>
      <SectionHeader
        title="Contact"
        subtitle="Let's connect and build something amazing"
      />

      <Card className="max-w-lg w-full mx-4 sm:mx-0" contentClassName="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
        <p className="group/item">
          <a
            className="qwex-link inline-flex items-center justify-center sm:justify-start gap-3 p-3 sm:p-4 min-h-[48px] w-full rounded-md border border-[var(--qwex-border)] hover:border-[var(--qwex-accent)] transition-all duration-200 group-hover/item:bg-[var(--qwex-accent)] group-hover/item:bg-opacity-5 active:scale-[0.98] text-xs sm:text-sm"
            href="mailto:bjc9001@gmail.com"
          >
            <MailIcon className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">bjc9001@gmail.com</span>
          </a>
        </p>

        <p className="group/item">
          <a
            className="qwex-link inline-flex items-center justify-center sm:justify-start gap-3 p-3 sm:p-4 min-h-[48px] w-full rounded-md border border-[var(--qwex-border)] hover:border-[var(--qwex-accent-2)] transition-all duration-200 group-hover/item:bg-[var(--qwex-accent-2)] group-hover/item:bg-opacity-5 active:scale-[0.98] text-xs sm:text-sm"
            href="https://www.linkedin.com/in/bchurchill23/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile (opens in new tab)"
          >
            <LinkedInIcon className="w-5 h-5 flex-shrink-0" />
            <span>LinkedIn Profile</span>
          </a>
        </p>

        <p className="group/item">
          <a
            className="qwex-btn inline-flex items-center justify-center gap-3 min-h-[48px] w-full sm:w-auto px-5 py-3 group-hover:shadow-[var(--qwex-shadow-glow)] transition-all duration-200 active:scale-[0.98] text-xs sm:text-sm"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume PDF (opens in new tab)"
          >
            Resume (PDF)
          </a>
        </p>
      </Card>
    </Section>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

function MailIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
}

MailIcon.propTypes = {
  className: PropTypes.string,
};

function LinkedInIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338A53.79 53.79 0 010 56a53.79 53.79 0 0153.84-53.8A53.79 53.79 0 01107.68 56a53.79 53.79 0 01-53.84 53.7zM447.9 448h-92.6V302.4c0-34.7-12.7-58.4-44.5-58.4-24.2 0-38.5 16.2-44.8 31.9-2.3 5.5-2.8 13.1-2.8 20.8V448h-92.8s1.2-236.2 0-261.1h92.8V224c12.3-18.8 34.3-45.7 83.5-45.7 61 0 106.7 39.8 106.7 125.2V448z" />
    </svg>
  );
}

LinkedInIcon.propTypes = {
  className: PropTypes.string,
};
