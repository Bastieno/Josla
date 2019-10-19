import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar .nav-link {
    font-size: 14px;
    text-transform: uppercase;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .navbar .nav-item.active {
    border-left: #444 3px solid;
  }
`;

export default function NavigationBar() {
  return (
    <Styles>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Josla</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">Career</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Styles>
  )
}
