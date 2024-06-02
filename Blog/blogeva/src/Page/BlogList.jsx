import React, { useEffect,useState } from 'react'
import { Link, useSearchParams,useParams } from 'react-router-dom'

function BlogList() {
    const [searchParams,setSearchParams]=useSearchParams()
    const [search,setSearch]=useState(searchParams.get('title')||"")
    const [data,setData]=useState([])
    const {blogId}=useParams()
    
    useEffect(()=>{
        setSearchParams({title:search})
        fetch(`http://localhost:8080/posts?title=${search}`)
        .then(e=>e.json())
        .then(e=>setData(e))
    },[search])

   

  return (
    <div>BlogList
        <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
        {data.map(ele=><li key={ele.id}>
        <Link to={`/post/${ele.id}`}>{ele.title}
        </Link>
        
            </li>)}
            
    </div>
  )
}

export default BlogList