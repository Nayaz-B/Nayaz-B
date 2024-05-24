import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <div>
        {
            posts.map((post)=>(
                <Post key={post.id} post={post}/>
            ))
        }
    </div>
  )
}

export default Feed