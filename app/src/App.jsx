import Intro from "./pages/Intro";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <nav className="sticky top-0 z-10 qwex-nav py-4">
        <ul className="flex justify-center">
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Intro id="intro" />
      <Projects id="projects" />
      <Blog id="blog" />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
}
