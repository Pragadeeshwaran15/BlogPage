import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import { API_URL } from '../App'
import BlogCard from './common/BlogCard'
import axios from 'axios';
function Home() {
  let [blogs,setBlogs]=useState([])
  const getPost=async()=>{
    try {
      let res=await axios.get(API_URL)
      if(res.status===200){
        setBlogs(res.data.filter(e=>e.status))
      }
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getPost()
  })
  return <div className="container-fluid">
            <Topbar/>
          <div className="posts">
            {
               blogs.map((e)=>{
               return <BlogCard name={e.name} image={e.image} description={e.description} key={e.id} />

               })
            }
          </div>

        </div>
}

export default Home
