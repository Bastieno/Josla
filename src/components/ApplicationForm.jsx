import React, { Component } from 'react'

export default class ApplicationForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="fullname" className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="fullname" placeholder="Full Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" placeholder="Email"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone no</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phoneNumber" placeholder="Phone number"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="position" className="col-sm-2 col-form-label">Position</label>
          <div className="col-sm-10">
            <select className="form-control" id="position">
              <option>Position</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="coverLetter" className="col-sm-2 col-form-label">Cover Letter</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="coverLetter" rows="4"></textarea>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="resume" className="col-sm-2 col-form-label">Resume</label>
          <div className="col-sm-10">
            <input type="file" className="form-control p-1" id="resume" />
          </div>
        </div>
      </form>
    )
  }
}
