import React, { Component } from 'react'

export default class EnquiryForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="Name">Full Name</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="EnquiryType">Enquiry Type</label>
          <select className="form-control">
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Message">Some few words</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
      </form>
    )
  }
}
