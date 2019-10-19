import React from 'react'
import bgImg from '../assets/images/bgImg.jpg'

export default function OurVision() {
  return (
    <section className="p-4 text-white" style={{"height": "200px", "background":`url(${bgImg})`}}>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h1 className="mb-3">Our Vision</h1>
            <p className="font-weight-bold">Our vision is to be at the intersection of digital innovation, cloud computing 
              and service engineering to deliver optimal customer service experiences.</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}
 