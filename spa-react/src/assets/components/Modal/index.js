import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

export default function Modal({ children, danger = false }) {
  let className = danger ? 'border-red' : 'border-blue';
  return (
    ReactDOM.createPortal(
      <div className='modal-component'>
        <div className='modal-backdrop'>
          {/* <div className='modal' style={{
          border : '4px solid',
          borderColor : danger ? 'red' : 'blue'
        }}> */}
          <div className={`modal ${className}`}>
            {children}
            {/* modal content */}
            {/* <h1>Zoom class is Available</h1>
            <p>feel free to <a href=''>join</a>here</p> */}
          </div>
        </div>
      </div>
      , document.getElementById('modal'))
  )
}
