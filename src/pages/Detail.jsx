
import { Card, ListGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';


const Detail = () => {
    const {
        state: { item },
      } = useLocation();
      
  return (
    <div>
          
 <Card style={{ height: '550px'}} className=" m-auto   text-center">
     
     
     
      
     
     
     
      <ListGroup variant="flush">
      <Card.Title><ListGroup.Item>{item.isim.toUpperCase()}</ListGroup.Item></Card.Title>
      
      <div className="d-flex justify-content-between">
      <Card.Img className="player-logo" variant="top"    style={{ width:"300px" }} src= {item.image} />
      <Card.Body>
        
        <ListGroup.Item><p> <span className=" fw-bold">Puan: </span><span className="text-danger fw-bold"> {item.puan}</span></p></ListGroup.Item>
        <ListGroup.Item> <span className=" fw-bold">Türü:</span>{item.turu}</ListGroup.Item> 
        <ListGroup.Item> <span className=" fw-bold">Aciklama:</span>{item.aciklama}</ListGroup.Item> 
        </Card.Body></div>
      </ListGroup>
    
      
      
      
    
   </Card>
    </div>
  )
}

export default Detail