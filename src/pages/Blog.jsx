import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const modules = import.meta.glob('../posts/*.md', { as: 'raw' })
    setPosts(Object.keys(modules).map(p => p.replace('../posts/', '').replace('.md', '')))
  }, [])

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(slug => (
          <li key={slug}>
            <Link to={`/blog/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
