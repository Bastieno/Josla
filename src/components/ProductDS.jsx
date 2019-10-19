import React from 'react'
import laptopImg from '../assets/images/laptop.png'
import { Link } from 'react-router-dom'

export default function ProductDS() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center py-3">
            <h1>Data science as a service</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img src={laptopImg} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-7">
            <p>Josla helps organisations (Executives, Managers and IT Personnel) who wants
              to leverage both operational and customer data to generate insight that guides
              business outcomes.</p>
            <p>We employ such techniques as field research, service design, computer programming
              and machine learning to advice, develop and support the use of data in the optimal
              delivery of services.</p>
            <p>We believe that data science as a hybrid of both business and technology consulting
              is the starting point for any truly successful digital transformation agenda.</p>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-3 m-auto text-center">
            <Link to='/' className="btn btn-success btn-block">Explore</Link>
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    </section>
  )
}
