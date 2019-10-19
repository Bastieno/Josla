import React from 'react'
import { Link } from 'react-router-dom'
import kiraImg from '../assets/images/kira.jpg'
import ideaBubImg from '../assets/images/ideaBub.jpg'
import programmerImg from '../assets/images/programmer.jpg'

export default function OlderPosts() {
  return (
    <section className="container py-3">
      <div className="row">
        <h1 className="p-3">Older Post</h1>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 text-center">
          <img src={ideaBubImg} alt="" className="img-fluid mb-2" />
          <h5 className="font-weight-bold">Cognitive Microservices</h5>
          <p>Josla is Lagos-based technology company whose core capabilities lie in digital ...</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src={kiraImg} alt="" className="img-fluid mb-2" />
          <h5 className="font-weight-bold">Introducing our new product - KIRA</h5>
          <p>The world is changing and its only right to change with it. People and businesses...</p>
        </div>
        <div className="col-md-4 mb-4 text-center">
          <img src={programmerImg} alt="" className="img-fluid mb-2" />
          <h5 className="font-weight-bold">Moving form a novice to a front-end Dev</h5>
          <p>At the start of my final year , I knew I wanted to get involved in the Nigerian ...</p>
        </div>  
      </div>
      <div className="row">
        <div className="col-md-3 m-auto btn-lg text-center">
          <Link to="/" className="btn btn-outline-danger">See More</Link>
        </div>
      </div>
    </section>
  )
}
