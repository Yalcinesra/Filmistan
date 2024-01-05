

const FilmForm = ({ handleSubmit, formVeri, setFormVeri }) => {
  return (
    <article
      id="add-Film"
      className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
    >
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
          Film Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formVeri.isim}
            onChange={(e) => setFormVeri({ ...formVeri, isim: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-puan" className="form-label">
          Film Puan
          </label>
          <input
            type="text"
            className="form-control"
            name="puan"
            value={formVeri.puan}
            onChange={(e) =>
              setFormVeri({ ...formVeri, puan: e.target.value })
            }
            required
          />
        </div>
       
        <label htmlFor="add-image" className="form-label">
        Film Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            name="image"
            value={formVeri.image}
            aria-describedby="basic-addon3"
            onChange={(e) =>
              setFormVeri({ ...formVeri, image: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-turu" className="form-label">
          Film Türü
          </label>
          <input
            type="text"
            className="form-control"
            name="turu"
            value={formVeri.turu}
            onChange={(e) =>
              setFormVeri({ ...formVeri, turu: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-aciklama" className="form-label">
          Film Aciklama
          </label>
          <textarea className="form-control" name="aciklama"
            value={formVeri.aciklama}
            onChange={(e) =>
              setFormVeri({ ...formVeri, aciklama: e.target.value })
            }
            required id="exampleFormControlTextarea1" rows="3"></textarea>
          
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            Save To Film
          </button>
        </div>
      </form>
    </article>
  );
};

export default FilmForm;
