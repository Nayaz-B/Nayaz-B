import { createContext,useState,useEffect } from "react";
const DataContext=createContext({})
export const DataProvider=({children})=>{
    const [searchItem,setSearchItem]=useState('')
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
      navigate('/')    }
return(
    <DataContext.Provider value={{
        setSearchItem,FilterResult,handleSubmit,postTitle,setPostTile,postContent,setPostContent, post,handleDelete
    }}>
        {children}
    </DataContext.Provider>
)}
export default DataContext



