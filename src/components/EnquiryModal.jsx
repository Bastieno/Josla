import React, { Component } from 'react'
import Modal from './Modal'
import EnquiryForm from './EnquiryForm'

export default class UploadResumeModal extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Cum optio vitae voluptas, qui mollitia veniam minima beatae fugit nisi quos.</p>
        </div>
        <Modal
          title="Get In Touch"
        >
          <EnquiryForm />
        </Modal>
      </div>
    )
  }
}
