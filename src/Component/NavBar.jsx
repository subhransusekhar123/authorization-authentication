import React from 'react'
import { useNavigate } from "react-router-dom";
const NavBar = () => {
    let Navigate = useNavigate();
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={()=>Navigate('/')}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>Navigate('/Greet')}>
                  Greet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>Navigate('/Table')}>
                  Table
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar