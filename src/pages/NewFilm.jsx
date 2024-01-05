import React, { useState } from "react";
import FilmForm from "../components/FilmForm";

import axios from "axios";

const NewFilm = () => {
  const initialValue = {
    isim: "",
    puan: "",
    aciklama:"" ,
    turu: "",
    image: "",
  };
  const [formVeri, setFormVeri] = useState(initialValue);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://655b152bab37729791a8849a.mockapi.io/movie",
      formVeri
    );

    setFormVeri(initialValue);
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Film</h1>

        <FilmForm
          handleSubmit={handleSubmit}
          formVeri={formVeri}
          setFormVeri={setFormVeri}
        />
      </article>
    </div>
  );
};

export default NewFilm;
