import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, Section, SectionHeader } from "../components";

const posts = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export default function Blog({ id }) {
  const [content, setContent] = useState("");
  const [activePost, setActivePost] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const articleRef = useRef(null);
  const postEntries = Object.entries(posts);

  const closePostAnimated = () => {
    return new Promise((resolve) => {
      if (articleRef.current) {
        setIsClosing(true);
        articleRef.current.classList.remove("animate-fade-in-up");
        articleRef.current.classList.add("animate-fade-out");

        setTimeout(() => {
          setContent("");
          setActivePost("");
          setIsClosing(false);
          resolve();
        }, 300);
      } else {
        setContent("");
        setActivePost("");
        resolve();
      }
    });
  };

  const resolvePostContent = async (post) => {
    if (typeof post === "string") {
      return post;
    }

    if (typeof post === "function") {
      const result = await post();
      return typeof result === "string" ? result : result?.default;
    }

    return post?.default;
  };

  const loadPost = async (path, post) => {
    try {
      if (activePost === path) {
        closePostAnimated();
        return;
      }

      if (activePost && activePost !== path) {
        await closePostAnimated();
      }

      const markdown = await resolvePostContent(post);
      setContent(markdown || "");
      setActivePost(path);
    } catch {
      setContent("Error loading post content.");
      setActivePost(path);
    }
  };

  const closePost = () => {
    closePostAnimated();
  };

  useEffect(() => {
    if (articleRef.current && content && !isClosing) {
      articleRef.current.classList.remove("animate-fade-in-up", "animate-fade-out");
      articleRef.current.classList.add("opacity-0");

      requestAnimationFrame(() => {
        if (articleRef.current) {
          articleRef.current.classList.remove("opacity-0");
          articleRef.current.classList.add("animate-fade-in-up");
        }
      });
    }
  }, [content, isClosing]);

  return (
    <Section id={id}>
      <SectionHeader
        emoji="📚"
        title="Blog"
        subtitle="Thoughts and insights"
      />

      <Card className="max-w-2xl w-full mx-4 sm:mx-0">
        <ul className="flex flex-col gap-2 sm:gap-3">
          {postEntries.map(([path, post], index) => (
            <li key={path}>
              <button
                className={`qwex-btn group-hover:shadow-[var(--qwex-shadow-glow)] transition-all duration-200 inline-flex items-center gap-2 text-sm sm:text-base min-h-[44px] px-4 py-2 active:scale-95 ${
                  activePost === path
                    ? "bg-[var(--qwex-accent-2)] text-[#0f1419]"
                    : ""
                } ${isClosing ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => !isClosing && loadPost(path, post)}
                disabled={isClosing}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-xs">
                  {activePost === path ? "📖" : "📄"}
                </span>
                <span className="truncate">{path.split("/").pop()}</span>
                {activePost === path && (
                  <span className="text-xs ml-1">✕</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </Card>

      {content && (
        <article
          ref={articleRef}
          className="qwex-card mt-2 sm:mt-4 text-left opacity-0 max-w-4xl w-full mx-4 sm:mx-0 relative p-4 sm:p-6"
        >
          <button
            onClick={closePost}
            disabled={isClosing}
            className={`absolute top-2 right-2 sm:top-4 sm:right-4 text-[var(--qwex-muted)] hover:text-[var(--qwex-accent)] transition-colors duration-200 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-[var(--qwex-border)] rounded-lg active:scale-95 ${
              isClosing ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Close post"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="prose prose-invert max-w-none pr-10 sm:pr-12 text-sm sm:text-base">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </article>
      )}
    </Section>
  );
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
};
