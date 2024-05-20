import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Navbar from '../components/Navbar';
import About from '../pages/About';
import NewFilm from '../pages/NewFilm';
import FilmList from '../pages/FilmList';
import UpdateFilm from '../pages/UpdateFIlm';
import Footer from '../components/Footer';
import Detail from '../pages/Detail';

const AppRouter = () => {
  return (
    <Router>
    <Navbar/>

     
    <Routes>
<Route path ="/" element={<FilmList/>}/>
<Route path ="/about" element={<About/>}/>
<Route path ="/new-film" element={<NewFilm/>}/>
<Route path ="/films" element={<FilmList/>}/>
<Route path ="/details" element={<Detail/>}/>


    </Routes>
   <Footer/>

    </Router>
  )
}

export default AppRouter