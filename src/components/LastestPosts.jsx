import React from 'react'
import { Link } from 'react-router-dom'
import blogPageImg from '../assets/images/blogPageImg.jpg'

export default function LastestPost() {
  return (
    <section className="container py-3">
      <div className="row">
        <h1 className="p-3">Lastest Post</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={blogPageImg} alt="blogpageimg" className="img-fluid"/>
        </div>
        <div className="col-md-8">
          <div className="">
            <h5>Cyber Security and Mobility</h5>
            <p><small className="text-muted">3rd Nov 2018 by Karina</small></p>
            Cyber security is the practice of protecting systems, networks, programs which 
            include hardware, software and data from digital attacks. These attacks are usually 
            aimed at accessing, changing, or destroying sensitive information or interrupting normal 
            business processes. Why is cyber security important? Innovation is a key driver for competition 
            and more generally… <Link to='/'><span className="text-success">Continue reading</span></Link>
          </div>
        </div>  
      </div>
    </section>
  )
}
