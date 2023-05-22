import React from 'react'
export default function Modal({children, setModal , modalHeader}) {
  return (
  <div className='modalOverlay' >
    <div className='modal'>
        <div className='modalHeader'>
            <h2>{modalHeader.toLocaleUpperCase()}</h2>
            <i className="bi bi-arrows-angle-contract modalMinimize" onClick={() => setModal(false)} ></i>
        </div>
        <div className='modalContent'>{children}</div>
    </div>
  </div> 
  )
}
