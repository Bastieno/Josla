import React, { Component } from 'react'
import Modal from './Modal'
import JobRecruitmentContent from './JobRecruitment'

export default class JobApplicationModal extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Cum optio vitae voluptas, qui mollitia veniam minima beatae fugit nisi quos.</p>
        </div>
        <Modal
          title="Job Recruitment Form"
        >
          <JobRecruitmentContent />
        </Modal>
      </div>
    )
  }
}
