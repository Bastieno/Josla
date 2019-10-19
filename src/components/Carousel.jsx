import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image10 from '../assets/images/image10.jpg'
import image11 from '../assets/images/image11.jpg'
import image12 from '../assets/images/image12.jpg'

const Styles = styled.div`
  .carousel-item {
    height: 450px;
  }

  .carousel-image-1 {
    background: url(${image10});
    background-size: cover;
  }

  .carousel-image-2 {
    background: url(${image11});
    background-size: cover;
  }

  .carousel-image-3 {
    background: url(${image12});
    background-size: cover;
  }
`;

const Carousel = () => (
  <Styles>
    <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item carousel-image-1 active">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="display-3">We Innovate</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
                  quod aliquid inventore vero perspiciatis.</p>
                <Link to="/about" className="btn btn-outline-danger btn-lg">About Us</Link>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="display-3">We Compute</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
                  quod aliquid inventore vero perspiciatis.</p>
                <Link to="/about" className="btn btn-outline-danger btn-lg">About Us</Link>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-3">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="display-3">We Engineer</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
                  quod aliquid inventore vero perspiciatis.</p>
                <Link to="/" className="btn btn-outline-danger btn-lg">About Us</Link>
              </div>
            </div>
          </div>
        </div>

        <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
          <span className="carousel-control-prev-icon"></span>
        </a>

        <a href="#myCarousel" data-slide="next" className="carousel-control-next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  </Styles>
)

export default Carousel