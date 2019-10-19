import React from 'react'
import { Link } from 'react-router-dom'

export default function JobOpenings() {
  return (
    <section className="container py-3">
      <h1 className="text-center p-3">Job Openings</h1>
      <div className="card mb-3 bg-light">
        <div className="card-body">
          <h4 className="card-title">Digital Marketer</h4>
          <p className="card-text">Are you social media savvy? Are you creative, enthusiastic 
          and data-driven? Then this is the team for you. 
          Join Josla and help take the future to the people.</p>
          <Link className="btn btn-success float-right" to="/career/digital-marketer">Read More</Link>
        </div>
      </div>
      <div className="card mb-3 bg-light">
        <div className="card-body">
          <h4 className="card-title">Backend Engineer</h4>
          <p className="card-text">Are you social media savvy? Are you creative, enthusiastic 
          and data-driven? Then this is the team for you. 
          Join Josla and help take the future to the people.</p>
          <Link className="btn btn-success float-right" to="/">Read More</Link>
        </div>
      </div>
    </section>
  )
}
