import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Modal from '../components/Modal'

export default class UploadResume extends Component  {
  render() {
    return (
      <section className="container py-3">
        <div className="row">
          <div className="col-md-8 m-auto text-center">
            <p>At Josla, we love extraordinary talents. If you think
            you are one that can help change the future, fantastic lets have your details.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Link 
              to="/career/upload-resume" 
              className="btn btn-success"
            >
              Upload Resume
            </Link>
          </div>
        </div>
      </section>
    )
  }
}
