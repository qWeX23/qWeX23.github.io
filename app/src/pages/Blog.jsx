import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const posts = import.meta.glob("../posts/*.md", { query: "raw" });

export default function Blog({ id }) {
  const [content, setContent] = useState("");
  const [activePost, setActivePost] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const articleRef = useRef(null);

  // Debug: log available posts
  useEffect(() => {
    console.log("Available posts:", Object.keys(posts));
  }, []);

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

      console.log("Loading post:", path);
      const md = await posts[path]();
      console.log("Post loaded:", md);
      // Vite's glob import with { query: "raw" } returns the content as default export
      setContent(md.default || md);
      setActivePost(path);
    } catch (error) {
      console.error("Error loading post:", error);
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
      className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center animate-fade-in-up"
    >
      <div className="qwex-hero">
        <h1 className="text-4xl font-bold">📚 Blog</h1>
        <p className="text-lg opacity-80">Thoughts and insights</p>
      </div>

      <div className="qwex-card group relative overflow-hidden max-w-2xl">
        {/* Hacker-style accent border */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--qwex-accent)] to-[var(--qwex-accent-2)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        <div className="relative z-10 p-6">
          <ul className="flex flex-col gap-3">
            {Object.keys(posts).map((path, index) => (
              <li key={path}>
                <button
                  className={`qwex-btn group-hover:shadow-[var(--qwex-shadow-glow)] transition-all duration-200 inline-flex items-center gap-2 ${
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
                  {path.split("/").pop()}
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
          className="qwex-card mt-4 text-left opacity-0 max-w-4xl relative"
        >
          {/* Close button */}
          <button
            onClick={closePost}
            disabled={isClosing}
            className={`absolute top-4 right-4 text-[var(--qwex-muted)] hover:text-[var(--qwex-accent)] transition-colors duration-200 p-2 hover:bg-[var(--qwex-border)] rounded-lg ${
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

          <div className="prose prose-invert max-w-none pr-12">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </article>
      )}
    </section>
  );
}
