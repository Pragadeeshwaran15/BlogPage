import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { API_URL } from '../App';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  let[blogs,setBlogs]=useState([])
  let Navigate=useNavigate()


const handleDelete=async(id)=>{
      
  let res=await axios.delete(`${API_URL}/${id}`)
  getData()

}

const getData=async()=>{
  try{
   let res=await axios.get(API_URL)
   console.log(res);
   if(res.status===200){
    setBlogs(res.data)
   }}
   catch(error){

   }
}
const toggle=async(e)=>{
 try{ 
  e.status= !e.status
  let res=await axios.put(`${API_URL}/${e.id}`,e)
  if(res.status===200){
      getData()
  }
}
  catch(error){
    console.log(Error);
  }
}
useEffect(()=>{
    getData()

},[])
  return <div className="container-fluid">
    <Topbar/>
    <div className="table mt-3">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td><img src={e.image} alt="" style={{height:"50px"}} /></td>
              <td>{e.description}</td>
              <td>
                <label class="switch">
                  <input type="checkbox" defaultChecked={e.status} onChange={()=>toggle(e)}/>
                  <span className="slider round"></span>
                </label>
              </td>
              <td className="d-flex gap-2 ">
              <Button variant="primary"onClick={()=>Navigate(`/edit/${e.id}`)}>Edit</Button>
              <Button variant="danger" onClick={()=>handleDelete(e.id)} >Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
    
  </div>
}

export default Dashboard
