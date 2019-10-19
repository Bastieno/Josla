import React from 'react'
import cmlImg from '../assets/images/cml.jpg'
import ibmImg from '../assets/images/ibm.jpg'
import innovaImg from '../assets/images/innova.jpg'
import etransactImg from '../assets/images/eTransact.jpg'
import unionBankImg from '../assets/images/unionBank.jpg'
import halogenSecurityImg from '../assets/images/halogenSecurity.jpg'

export default function KeyPartners() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-center">Our Partners</h1>
        <p className="text-center">Not to brag, but we ve had the pleasure to work and partner with some amazing companies.</p>
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-6 mt-1">
          <img className="img-fluid" src={cmlImg} alt="" />
          </div>
          <div className="col-md-4 col-sm-6 mt-1">
          <img className="img-fluid" src={ibmImg} alt="" />
          </div>
          <div className="col-md-4 col-sm-6 mt-1">
          <img className="img-fluid" src={innovaImg} alt="" />
          </div>
          <div className="col-md-4 col-sm-6 mt-1">
          <img className="img-fluid" src={etransactImg} alt="" />
          </div>
          <div className="col-md-4 col-sm-6 mt-1">
          <img className="img-fluid" src={unionBankImg} alt="" />
          </div>
          <div className="col-md-4 col-sm-6 mt-1">
          <img className="img-fluid" src={halogenSecurityImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
