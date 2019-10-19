import React from 'react'
import { Link } from 'react-router-dom'

export default function GetInTouch() {
  return (
    <section>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-9 m-auto text-center">
            <h1>Get In Touch</h1>
            <p className="mb-0">Ready to Innovate, Compute and Engineer?</p>
            <p>You can call us or leave a request and we will reply as soon as possible. 
              We are always glad to see you in our office from 9am to 6pm weekdays.</p>
            <p className="font-weight-bold">The OA & A Partnership, 6th Floor Fortune Tower 27/29, Adeyemo Alakija Str, Victoria Island, Lagos, Nigeria.</p>
            <p className="mb-0 font-weight-bold">Contact Us on</p>
            <p className="mb-0 font-weight-bold">Phone - +234 (0) 8087488793</p>
            <p className="font-weight-bold">Email - corporate@josla.com.ng</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 m-auto text-center">
            <Link className="btn btn-danger btn-xl" to="/about/enquiry">Enquire</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
