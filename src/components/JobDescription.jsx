import React from 'react'

export default function JobDescription() {
  return (
    <div className="container pb-5">
      <div className="row mb-3">
        <div className="column">
          <h4>Position</h4>
          <p>Digital Marketer</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="column">
          <h4>Description</h4>
          <p>Join our team to help plan and manage marketing campaigns that 
            promotes our brand, services and products.</p>
        </div> 
      </div>
      <div className="row mb-3">
        <div className="column">
          <h4>Responsibility</h4>
          <p>In this role, you will be responsible for:</p>
          <ul class="list-group">
            <li class="list-group-item">
              <i class="fas fa-check mr-1"></i>
              Realigning the company’s brand accross various digital channel.</li>
            <li class="list-group-item">
              <i class="fas fa-check mr-1"></i>
              Implementing content and messaging strategy for lead generation on products and services.</li>
            <li class="list-group-item">
              <i class="fas fa-check mr-1"></i>
              Hosting company and attend other events required to drive visibility.</li>
          </ul>
        </div>
      </div>
      <div className="row mb-3">
        <div className="column">
          <h4>Qualification</h4>
          <ul class="list-group">
            <li class="list-group-item">
              <i class="fas fa-check mr-1"></i>
              At least a 2:1 (second class upper division) undergraduate degree from a respectable university.</li>
            <li class="list-group-item">
            <i class="fas fa-check mr-1"></i>
              At least two (2) years work experience or a postgraduate degree in content-related work.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
