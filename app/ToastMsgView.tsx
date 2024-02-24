import React from 'react'

interface ToastMsgProps {
    msg: string
}

function ToastMsg({msg}: ToastMsgProps) {
  return (
    <div className="tw-toast tw-toast-end">
        <div className="tw-alert tw-alert-success">
            <span>{msg}</span>
        </div>
    </div>
  )
}

export default ToastMsg