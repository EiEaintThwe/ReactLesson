import React, { Children } from 'react';
import './index.css';

export default function Modal({children}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
            {children}
            {/* modal content */}
            {/* <h1>Zoom class is Available</h1>
            <p>feel free to <a href=''>join</a>here</p> */}
        </div>
    </div>
  )
}
