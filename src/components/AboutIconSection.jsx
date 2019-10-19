import React from 'react'

export default function AboutIconSection() {
  return (
    <section className="py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-cog fa-5x mb-2"></i>
            <h3>Digital Innovation</h3>
            <p>Transform traditional business models and processes with digital technologies.</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-cloud fa-5x mb-2"></i>
            <h3>Cloud Computing</h3>
            <p>Leverage cost effective computing power and other IT resources via the internet.</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-cart-plus fa-5x mb-2"></i>
            <h3>Service Engineering</h3>
            <p>Apply first principle of engineering to build concept into tangible value propositions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
