import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const posts = import.meta.glob("../posts/*.md", { query: "raw" });

export default function Blog({ id }) {
  const [content, setContent] = useState("");
  const [activePost, setActivePost] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const articleRef = useRef(null);

  const loadPost = async (path) => {
    try {
      // If clicking the same post, toggle it off
      if (activePost === path) {
        closePost();
        return;
      }

      // If switching posts while one is open, close current first
      if (activePost && activePost !== path) {
        await closePostAnimated();
      }

      const md = await posts[path]();
      // Vite's glob import with { query: "raw" } returns the content as default export
      setContent(md.default || md);
      setActivePost(path);
    } catch {
      setContent("Error loading post content.");
      setActivePost(path);
    }
  };

  const closePostAnimated = () => {
    return new Promise((resolve) => {
      if (articleRef.current) {
        setIsClosing(true);
        articleRef.current.classList.remove("animate-fade-in-up");
        articleRef.current.classList.add("animate-fade-out");

        // Wait for animation to complete
        setTimeout(() => {
          setContent("");
          setActivePost("");
          setIsClosing(false);
          resolve();
        }, 300); // Match animation duration
      } else {
        setContent("");
        setActivePost("");
        setIsClosing(false);
        resolve();
      }
    });
  };

  const closePost = () => {
    closePostAnimated();
  };

  useEffect(() => {
    if (articleRef.current && content && !isClosing) {
      // Reset opacity and remove any existing animation classes
      articleRef.current.classList.remove(
        "animate-fade-in-up",
        "animate-fade-out"
      );
      articleRef.current.classList.add("opacity-0");

      // Force reflow and then add fade-in animation
      requestAnimationFrame(() => {
        if (articleRef.current) {
          articleRef.current.classList.remove("opacity-0");
          articleRef.current.classList.add("animate-fade-in-up");
        }
      });
    }
  }, [content, isClosing]);

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-12 sm:p-8 text-center animate-fade-in-up"
    >
      <div className="qwex-hero">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">📚 Blog</h1>
        <p className="text-base sm:text-lg opacity-80 mt-2">Thoughts and insights</p>
      </div>

      <div className="qwex-card group relative overflow-hidden max-w-2xl w-full mx-4 sm:mx-0">
        {/* Hacker-style accent border */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--qwex-accent)] to-[var(--qwex-accent-2)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        <div className="relative z-10 p-4 sm:p-6">
          <ul className="flex flex-col gap-2 sm:gap-3">
            {Object.keys(posts).map((path, index) => (
              <li key={path}>
                <button
                  className={`qwex-btn group-hover:shadow-[var(--qwex-shadow-glow)] transition-all duration-200 inline-flex items-center gap-2 text-sm sm:text-base min-h-[44px] px-4 py-2 active:scale-95 ${
                    activePost === path
                      ? "bg-[var(--qwex-accent-2)] text-[#0f1419]"
                      : ""
                  } ${isClosing ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => !isClosing && loadPost(path)}
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
        </div>
      </div>

      {content && (
        <article
          ref={articleRef}
          className="qwex-card mt-2 sm:mt-4 text-left opacity-0 max-w-4xl w-full mx-4 sm:mx-0 relative"
        >
          {/* Close button */}
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
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      )}
    </section>
  );
}
