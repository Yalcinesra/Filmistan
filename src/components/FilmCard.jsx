// import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Card} from "react-bootstrap/esm";
const ProductCard = ({item,getData}) => {
 
const {isim,image,puan}=item
const navigate=useNavigate()





// const handleRemove=async()=>{
// await axios.delete(
//   `https://655b152bab37729791a8849a.mockapi.io/movie/${id}`
// );
// getData()
// }

  return (
    <div className="d- flex flex-column flex-column">
    
 <Card style={{ height: '470px'}} className=" filmcard card rounded-2 m-auto player-kart mt-4 text-center d-flex flex-column justify-content-between
 " >
     <Card.Img className="player-logo" variant="top" onClick={()=>navigate('/details',{state:{item}})}   style={{ height: '380px' }} src= {image} />
     <Card.Body>
     <div className="d-flex justify-content-between">
      <h6 onClick={()=>navigate('/update-film',{state:{item}})}>  {isim.toUpperCase()}</h6>
     <p> <span className="text-danger fw-bold">{puan} </span></p>
     
      
      
      </div>
      
     </Card.Body>
   </Card></div>
  );
};

export default ProductCard;
