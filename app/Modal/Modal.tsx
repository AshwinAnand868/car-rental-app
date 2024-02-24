'use client'
import { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
    isOpen: Boolean,
    onDismiss: () => void,
    title?: String,
    children: ReactNode
}

const Modal = ({ isOpen, title, onDismiss, children }: ModalProps) => {

    if (!isOpen) {
        return null;
    }

    return <div
    className='tw-fixed tw-w-screen tw-h-screen custom-modal-backdrop tw-top-0 tw-bottom-0 tw-z-[2000] tw-left-0 tw-right-0 tw-flex tw-justify-center tw-items-center'
    onClick={onDismiss}
>
    <div
        className='tw-w-[90%] md:tw-w-[1000px] tw-h-[90vh] tw-max-h-[680px] tw-overflow-x-hidden tw-bg-white tw-rounded-xl tw-p-2 sm:tw-pb-2 tw-pb-[9rem] tw-flex tw-flex-col tw-relative'
        onClick={(event) => event.stopPropagation()}
    >
        <AiOutlineClose className='tw-absolute tw-right-4 tw-top-3 tw-cursor-pointer'
            onClick={onDismiss} />
        <div className='tw-w-full tw-h-10 tw-flex tw-items-center tw-p-2 tw-mb-1 tw-border-b-[1px] tw-border-b-gray-300'>
            <h1 className='md:tw-text-xl tw-text-[0.8rem] tw-font-bold'>{title}</h1>
        </div>
        {children}
    </div>

</div>
}

export default Modal;