import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal" style={{ display:"block", backgroundColor: "rgba(0,0,0,0.5)", overflow: "auto" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="close">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal
