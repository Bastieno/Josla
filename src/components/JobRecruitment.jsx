import React, { Component } from 'react'
import JobDescription from './JobDescription'
import ApplicationForm from './ApplicationForm'

export default class JobRecruitment extends Component {
  render() {
    return (
      <>
        <JobDescription />
        <ApplicationForm />
      </>
    )
  }
}
