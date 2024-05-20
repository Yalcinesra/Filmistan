import axios from "axios";

import FilmForm from "../components/FilmForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateFilm = () => {
  const {
    state: { item },
  } = useLocation();
  const navigate = useNavigate();

  const [formVeri, setFormVeri] = useState(item);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://655b152bab37729791a8849a.mockapi.io/movie/${item.id}`,
      formVeri
    ); // submit tetiklendiğinde updte isteğini id ye göre atıyorum.
    navigate(-1); // update başarılı olursa product-list sayfasından geldiğim için o sayfaya geri dönüyorum.
  };

  return (
    <div className="container">
      <article
        name="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center">Update Film</h1>

        <FilmForm
          handleSubmit={handleSubmit}
          formVeri={formVeri}
          setFormVeri={setFormVeri}
        />
      </article>
    </div>
  );
};

export default UpdateFilm;
