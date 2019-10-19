import React from 'react'
import { Link } from 'react-router-dom'
import analyticsImg from '../assets/images/analytics.jpg'
import homelaptopImg from '../assets/images/laptophome.jpg'

export default function WhatWeOffer() {
  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10 m-auto text-center">
            <h1>What we do</h1>
            <p>We are at the intersection between Digital innovation, 
              Cloud computing and Service Engineering to deliver optimal customer service experiences.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-md-6">
              <div className="card py-2">
                <div className="text-center">
                  <img className="img-fluid" src={ analyticsImg } alt="analytics" />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">Data Science As A Service</h4>
                  <p className="card-text text-center">We help organisations who want to leverage both operational and customer data
                    to generate insight that translate to optimal business outcomes.</p>
                </div>
                <div className="col text-center">
                  <Link className="btn btn-danger btn-xl" to="/">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card py-2">
                <div className="text-center">
                  <img className="img-fluid" src={ homelaptopImg } alt="laptop" />
                </div>
                <div className="card-body">
                  <h4 className="card-title text-center">Digital Product Development</h4>
                  <p className="card-text text-center">We take the time to understand clients’ requirements to deliver 
                  bespoke web and mobile applications as digital products.</p>
                </div>
                <div className="col text-center">
                  <Link className="btn btn-danger btn-xl" to="/">Learn More</Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
