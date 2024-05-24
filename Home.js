import React from 'react'
import Feed from './Feed'

const Home = () => {
  return (
    <div>
        {
            posts.length?(
                <Feed posts={posts}/>
            ):<p>No posts found</p>
        }
    </div>
  )
}

export default Home