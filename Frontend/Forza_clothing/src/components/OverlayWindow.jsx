import React from 'react'

import './OverlayWindow.css'

function OverlayWindow({closeWindowFunction, children}) {
  return (
        <div 
          className="overlay-window"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeWindowFunction?.();
            }
          }}
        >
          {children}
        </div>
  )
}

export default OverlayWindow