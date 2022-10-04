import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postSlice'

const PostList = () => {
  const posts = useSelector(selectAllPosts)
  console.log(posts, '112323222')

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <h3>{post.content}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ))
  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  )
}

export default PostList
