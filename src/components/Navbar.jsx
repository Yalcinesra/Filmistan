import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Filmistan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/new-film">New Film</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Card>
    // <nav className="navbar navbar-expand-lg bg-dark">
    //   <div className="container-fluid ">
    //     <span className="navbar-brand text-white">Filmistan</span>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink className="nav-link active" aria-current="page" to="/">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/new-film">
    //             New Film
    //           </NavLink>
    //         </li>
           
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/about">
    //          About
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav></Card>
  );
}

export default MyNavbar