import React from 'react'
import { Link } from 'react-router-dom'
import wordCloudImg from '../assets/images/wordCloud.jpg'
import kiraImg from '../assets/images/kira.jpg'
import ideaBubImg from '../assets/images/ideaBub.jpg'

export default function HomeBlog() {
  return (
    <section className="py-3 bg-light mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <h1>Blog</h1>
            <p>Here is our blog post</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-columns">
              <div className="card">
                <img className="card-img-top" src={wordCloudImg} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Cyber security and Mobility</h4>
                    <p className="card-text">What is cyber security? Cyber security is the practice of protecting systems, ...</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={ideaBubImg} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Cognitive Microservices</h4>
                    <p className="card-text">Josla is Lagos-based technology company whose core capabilities lie in digital ...</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={kiraImg} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Introducing our new product- Kira</h4>
                    <p className="card-text">The world is changing and its only right to change with it. People and businesses...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 m-auto text-center">
            <Link className="btn btn-outline-danger btn-xl" to="/">See More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
