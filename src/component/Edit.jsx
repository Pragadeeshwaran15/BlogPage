import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Topbar from './Topbar';
import BlogCard from './common/BlogCard'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate,useParams } from 'react-router-dom';

function Edit() {
  let [name,setName] = useState("")
  let [image,setImage] = useState("")
  let [description,setDesc] = useState("")
  let navigate = useNavigate()
  let {id}=useParams()

  const handleEdit = async()=>{
    try {
      let data = {name,image,description,status:false}
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status===200)
      {
        navigate('/dashboard')
      }

    } catch (error) {
      
    }
  }
 const getDataById=async()=>{
  try {
    let res=await axios.get(`${API_URL}/${id}`)
    if(res.status===200){
       setDesc(res.data.description)
       setImage(res.data.image)
       setName(res.data.name)
    }
    
  } catch (error) {
    
  }
 }

 useEffect(()=>{
  getDataById()
 },[])



  return <div className='container-fluid'>
      <Topbar/>
      <div className='homeWrapper'>
      <div className='formWrapper'>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" placeholder="Image Url" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Description" value={description} onChange={(e)=>{setDesc(e.target.value)}}/>
        </Form.Group>
        
        <Button variant="primary" onClick={()=>handleEdit()}>
          Change
        </Button>
      </Form>
      </div>
      <div className='previewWrapper'>
        <h2 >Preview</h2>
        <BlogCard
          name={name}
          image={image}
          description={description}
        />
      </div>
      </div>
  </div>
}

export default Edit