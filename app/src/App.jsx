import { useState, useEffect } from 'react';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.theme === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <>
      <nav className="sticky top-0 z-10 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur py-4">
        <ul className="flex justify-center gap-4">
          <li>
            <a className="text-blue-600 hover:underline" href="#intro">Intro</a>
          </li>
          <li>
            <a className="text-blue-600 hover:underline" href="#about">About</a>
          </li>
          <li>
            <a className="text-blue-600 hover:underline" href="#projects">Projects</a>
          </li>
          <li>
            <a className="text-blue-600 hover:underline" href="#blog">Blog</a>
          </li>
          <li>
            <a className="text-blue-600 hover:underline" href="#contact">Contact</a>
          </li>
          <li>
            <button
              onClick={() => setDark(!dark)}
              className="px-2"
              aria-label="Toggle dark mode"
            >
              {dark ? '🌞' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
      <Intro id="intro" />
      <About id="about" />
      <Projects id="projects" />
      <Blog id="blog" />
      <Contact id="contact" />
    </>
  );
}
