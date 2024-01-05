import React, { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";

import axios from "axios";
import { Col, Row } from "react-bootstrap";


const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  

 
  const BASE_URL = "https://655b152bab37729791a8849a.mockapi.io/movie";

  const getData = async () => {
    try {
      const { data } = await axios(
        BASE_URL
      );
      console.log(data);
      setFilms(data);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true); 
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  getData();
}, [])

const handleSubmit=(e)=>{
  e.preventDefault()
  getData()
    }

  if (error) {
    return <p>Something went wrong..... </p>;
  }

  return (
    <div className="container mt-3">
     <h1 className="text-center">Film List</h1>
      <div className="d-sm-block d-md-flex">
        {loading === true ? (
          <p> Loading....</p>
        ) : (
          <>

            <article id="product-panel">
            <div className="container ">
     

      <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
       
        
        </div>
      </form>
    </div>
            <Row className="justify-content-center">
           
              {films.map((item) => (
               
                <Col md={6} lg={4} xl={3} key={item.id}>
                <FilmCard  item={item} getData={getData}/></Col>
              ))}</Row>
            </article>
            
          </>
        )}
      </div>
    </div>
  );
};

export default FilmList;
