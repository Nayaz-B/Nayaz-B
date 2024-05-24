
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Missing from './Missing';

import PostPage from './PostPage';
import {format} from'date-fns';
import About from './About';
import Newpost from './Newpost';
import { DataProvider } from './Context/DataContext';

function App() {
 /* const [searchItem,setSearchItem]=useState('')
  const [postTitle,setPostTitle]=useState('')
  const [postContent,setPostContent]=useState('')
  const [filteredResult,setFilteredResult]=useState('')
  const navigate=useNavigate()
    const [posts,setposts]=useState([
      {
        id:1,
        title:'My first post',
        date:'jan 01,2021. 11:20:12',
        content:'started html'
      },
      {
        id:2,
        title:'My second post',
        date:'jan 01,2021. 13:29:12',
        content:'started html'
      },
      {
        id:3,
        title:'My third post',
        date:'jan 01,2021. 15:20:12',
        content:'started html'
      },
    ])
    const handleSubmit=(e)=>{
      e.preventDefault()
        const id=posts.length? [posts.length-1].id+1 : 1
        const date=format(new Date(),'yyyy/MM/dd kk:mm:ss')
        const newPost={id,title:postTitle,date,content:postContent}
        const allpost=[...posts,newPost]
        setposts(allpost)
        setPostTitle('')
        setPostContent('')
        navigate('/')
      
    }
    useEffect(()=>{
      const result=posts.filter((post)=>(
        ((post.title).toLowerCase()).includes(searchItem.toLowerCase())||((post.content.toLowerCase()).includes(searchItem.toLowerCase())
      )))
      setFilteredResult(result.reverse())
    },[posts,searchItem])

      const handleDelete=(id)=>{
        const postList=posts.filter(post=>post.id!==id)  
      setposts(postList)
    navigate('/')    }*/
  

  return (
    <div>
      <DataProvider>
      <Header />
      <Nav searchItem={searchItem} setSearchItem={setSearchItem}/>

      <Routes>
        <Route path='/' element={<Home posts={filteredResult}/>}/>
        <Route path='post'>
        
        <Route index element={<Newpost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle}  postContent={postContent} setPostContent={setPostContent}/>}/>
        <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete}/>}/> 
    </Route>
          <Route path='about' element={<About />} />
          <Route path='/*' element={<Missing />}/>
      </Routes>
      </DataProvider>
      

    </div>
  );
}

export default App;
