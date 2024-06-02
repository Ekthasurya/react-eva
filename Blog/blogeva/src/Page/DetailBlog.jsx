import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailBlog() {
    const[blog,setBlog]=useState({})
    const {blogId}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:8080/posts/${blogId}`)
        .then(e=>e.json())
        .then(e=>setBlog(e))
    })

    function deleteHandler({blogId}){
        fetch(`http://localhost:8080/posts/${blogId}`,{
            method:"DELETE"
        }).then(e=>e.json())
        .then(e=>{
            fetch('http://localhost:8080/posts').then(e.json()).then((e)=>setData(e))
        })
    }
   
  return (
    <div style={{ border:"2px solid red", topMargin:"50px",padding:"auto", boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>DetailBlog
         <br />
         Title: {blog?.title}
         <br />
        Content: {blog?.content}
        <br />
        Author: {blog?.author}
        <br />
        Category:{blog?.category}
        <br />
        <button onClick={deleteHandler}>Delete</button>

    </div>
  )
}

export default DetailBlog