import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import './App.css';

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Intro</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
