import React, { Component } from 'react'

export default class ResumeForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="email" id="fullName" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="portfolioLink">Portfolio Link</label>
          <input type="text" id="portfolioLink" className="form-control" placeholder="Portfolio Link"/>
        </div>
        <div className="form-group">
          <label htmlFor="cv">Upload Cv</label>
          <input type="file" id="cv" className="form-control p-1" />
        </div>
        <div className="form-group">
          <label htmlFor="aboutYou">About you</label>
          <textarea className="form-control" id="aboutYou" rows="4"></textarea>
        </div>
      </form>
    )
  }
}
