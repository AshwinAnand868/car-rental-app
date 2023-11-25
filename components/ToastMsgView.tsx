import React from 'react'

interface ToastMsgProps {
    msg: string
}

function ToastMsg({msg}: ToastMsgProps) {
  return (
    <div className="toast toast-end">
        <div className="alert alert-success">
            <span>{msg}</span>
        </div>
    </div>
  )
}

export default ToastMsg