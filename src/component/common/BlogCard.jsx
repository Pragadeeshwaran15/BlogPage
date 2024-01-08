import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BlogCard({name,image,description}) {
  return  <Card style={{ width: '28rem' }} className='Card'>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
</Card>
}

export default BlogCard
