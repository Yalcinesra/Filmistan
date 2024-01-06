import React from 'react'
import Card from 'react-bootstrap/Card';
const Footer = () => {
  return (
    <div> 
    <Card className="text-center bg-dark">
    <Card.Footer className='text-white'> All Rights Reserved © {new Date().getFullYear()}
            
            </Card.Footer>
    
   
  </Card></div>
  )
}

export default Footer