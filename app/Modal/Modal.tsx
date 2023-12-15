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
        className='fixed w-screen h-screen bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 z-[2000] flex justify-center items-center'
        onClick={onDismiss}
    >
        <div
            className='min-w-[400px] max-w-full overflow-x-hidden min-h-[400px] bg-white rounded-xl p-2 flex flex-col relative'
            onClick={(event) => event.stopPropagation()}
        >
            <AiOutlineClose className='absolute right-4 top-3 cursor-pointer'
                onClick={onDismiss} />
            <div className='w-full h-10 flex items-center p-2 mb-1 border-b-[1px] border-b-gray-300'>
                <h1 className='text-xl font-bold'>{title}</h1>
            </div>
            {children}
        </div>

    </div>
}

export default Modal;