import React from 'react'
import chessImg from '../assets/images/chess.jpg'

export default function LifeAtJosla() {
  return (
    <section className="container py-3">
      <div className="row">
        <div className="col-md-12 text-center">
          <p>Awesome!</p>
          <p> Welcome to our career page. Are you ready to join our team create the future?</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="p-3">Life At Josla</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={chessImg} alt="blogpageimg" className="img-fluid"/>
        </div>
        <div className="col-md-8">
          <div className="">
            <h5>Cyber Security and Mobility</h5>
            At Josla, we combine our love for computing, enthusiasm for technology and interest 
            in relationship development, to create an environment that can foster the growth of 
            local talents in software and hardware engineering. Join Josla today and together 
            we can create tomorrow and the future.
          </div>
        </div>  
      </div>
    </section>
  )
}
