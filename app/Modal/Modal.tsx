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
        className='fixed w-screen h-screen custom-modal-backdrop top-0 bottom-0 z-[2000] left-0 right-0 flex justify-center items-center'
        onClick={onDismiss}
    >
        <div
            className='w-[90%] md:w-[1000px] h-[90vh] max-h-[680px] overflow-x-hidden bg-white rounded-xl p-2 sm:pb-2 pb-[9rem] flex flex-col relative'
            onClick={(event) => event.stopPropagation()}
        >
            <AiOutlineClose className='absolute right-4 top-3 cursor-pointer'
                onClick={onDismiss} />
            <div className='w-full h-10 flex items-center p-2 mb-1 border-b-[1px] border-b-gray-300'>
                <h1 className='md:text-xl text-[0.8rem] font-bold'>{title}</h1>
            </div>
            {children}
        </div>

    </div>
}

export default Modal;