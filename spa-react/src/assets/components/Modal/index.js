import React, { Children } from 'react';
import './index.css';
import ReactDOM from 'react-dom';

export default function Modal({children}) {
  return (
   ReactDOM.createPortal( <div className='modal-backdrop'>
        <div className='modal'>
            {children}
            {/* modal content */}
            {/* <h1>Zoom class is Available</h1>
            <p>feel free to <a href=''>join</a>here</p> */}
        </div>
    </div>, document.getElementById('modal'))
  )
}
