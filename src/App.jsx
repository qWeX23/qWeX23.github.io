import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Intro from './pages/Intro'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import './App.css'

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Intro</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}
