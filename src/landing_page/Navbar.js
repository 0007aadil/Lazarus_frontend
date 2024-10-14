import React from 'react'

import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        




<nav className="navbar navbar-expand  border-bottom" style={{backgroundColor: "#FFFFF0"}} >
  <div className="container">
    <Link className="navbar-brand" to={"/"}>
        <img src="media/images/Logo.svg" style={{width:"20%"}} alt="logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active text-muted fw-bold" to={"/home"}>Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-muted fw-bold" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-muted fw-bold" to={"/products"}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-muted fw-bold" to={"/pricing"}>Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-muted fw-bold" to={"/support"}>Support</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active text-muted fw-bold" to={"/"}><i className="fa-solid fa-bars"></i></Link>
        </li>
        
        
      </ul>
        
    </form>
    </div>
  </div>
</nav>
            
       
     );
}

export default Navbar;