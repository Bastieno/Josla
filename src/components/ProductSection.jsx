import React from 'react'
import { Link } from 'react-router-dom'
import kiraImg from '../assets/images/productImage1.jpg'
import halotrakImg from '../assets/images/productImage2.jpg'
import pegridImg from '../assets/images/productImage3.jpg'

export default function ProductSection() {
  return (
    <section className="container py-3">
      <div className="card mb-3 mt-2">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img src={kiraImg} className="card-img img-fluid" alt="..."/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Kira</h5>
              <p className="card-text text-justify">Kira is an AI-driven application that helps internet-enabled Nigerians with a registered BVN 
                to access financial services such as digital wallet, payment transactions, spend analytics and P2P lending. 
                Want to know more about our Kira product?.
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link className="btn btn-outline-danger" to="/">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mt-2">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img src={halotrakImg} className="card-img" alt="..."/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">HaloTrak</h5>
              <p className="card-text">HaloTrak is an IoT-based solution that helps internet-enabled Nigerians with at least one 
                  duly registered vehicle to securely manage their mobile assets through locate & track, review of operational information 
                  and on-demand insurance premiums.
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link className="btn btn-outline-danger" to="/">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mt-2">
        <div className="row no-gutters">
          <div className="col-md-6">
            <img src={pegridImg} className="card-img" alt="..."/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">peGrid</h5>
              <p className="card-text text-truncate">peGrid helps both public and private distribution utilities to match supply 
                  and demand of electrical energy in real-time through integration of renewable energy systems and 
                  disaggregation of electricity consumption.
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              <Link className="btn btn-outline-danger" to="/">Learn More</Link>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}
 