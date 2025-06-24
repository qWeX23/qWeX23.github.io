import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const posts = import.meta.glob('../posts/*.md', { as: 'raw' });

export default function Blog({ id }) {
  const [content, setContent] = useState('');

  const loadPost = async (path) => {
    const md = await posts[path]();
    setContent(md);
  };

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul className="flex flex-col gap-2">
        {Object.keys(posts).map((path) => (
          <li key={path}>
            <button
              className="px-4 py-2 border rounded bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => loadPost(path)}
            >
              {path.split('/').pop()}
            </button>
          </li>
        ))}
      </ul>
      {content && (
        <article className="prose dark:prose-invert mt-4 text-left">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      )}
    </section>
  );
}
