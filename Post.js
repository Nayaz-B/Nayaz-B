import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div>
      <Link to={`post/${post.id}`}>
      <h1>{post.title}</h1>
      <h2>{post.date}</h2>
      <p>{post.content}</p>
      </Link></div>
  )
}

export default Post