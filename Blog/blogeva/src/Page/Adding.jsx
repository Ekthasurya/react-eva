import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

function Adding() {
   
    const blogTitle =useRef()
    const blogcontent =useRef()
    const blogauthor =useRef()
    const blogcategory =useRef()
    const[add,setAdd]=useState([])
    function fetchData(){
        fetch(`http://localhost:8080/posts`)
        .then(e=>e.json())
        .then(e=>setAdd(e))
    }
    useEffect(()=>{
       fetchData()
    },[])

    function addHandler(e){
         e.preventDefault();
        fetch('http://localhost:8080/posts',{
            method:"POST",
            headers:{
                "content-type":"aplication/json"
            },
            body:JSON.stringify({
        "title": blogTitle.current.value,
        "content": blogcontent.current.value,
        "author": blogauthor.current.value,
        "category":blogcategory.current.value
            })
        })
        .then(e=>e.json())
        .then(e=>fetchData(e)).finally(()=>{
     blogTitle.current.value="" 
     blogcontent.current.value=""
     blogauthor.current.value="" 
     blogcategory.current.value="" 
        })
    }

   
  return (
    <div>Adding
        <form onSubmit={addHandler} >
            <input ref={blogTitle} />
            <input ref={blogcontent} />
            <input ref={blogauthor} />
            <input ref={blogcategory} />
           
            <input type="submit" />
        </form>
    </div>
  )
}

export default Adding