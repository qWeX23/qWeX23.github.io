import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import './App.css';

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
      <Intro id="intro" />
      <About id="about" />
      <Projects id="projects" />
      <Blog id="blog" />
    </>
  );
}
