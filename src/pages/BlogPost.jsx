import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export default function BlogPost() {
  const { slug } = useParams()
  const [content, setContent] = useState('')

  useEffect(() => {
    import(`../posts/${slug}.md?raw`).then(mod => {
      setContent(mod.default)
    })
  }, [slug])

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
