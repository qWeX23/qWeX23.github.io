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
    <section id={id}>
      <h1>Blog</h1>
      <ul>
        {Object.keys(posts).map((path) => (
          <li key={path}>
            <button onClick={() => loadPost(path)}>{path.split('/').pop()}</button>
          </li>
        ))}
      </ul>
      {content && (
        <article>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      )}
    </section>
  );
}
