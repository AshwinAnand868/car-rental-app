import React from 'react'

function SearchInput() {
    return (
        <div className='mt-5'>
            <h2 className='text-center text-[20px]
            text-gray-400 mb-3'>Let's Search what you need</h2>
            <div className='flex justify-center'>
                <div className='flex bg-gray-100 p-1 px-5 gap-2 rounded-2xl sm:rounded-full flex-col sm:flex-row'>
                    <div className='flex items-center justify-evenly'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <input type='text'
                            placeholder='Location'
                            className='outline-none bg-transparent p-2 text-gray-400' />
                    </div>
                    <hr className='block sm:hidden w-full h-0.5 mx-auto bg-gray-300 border-0 rounded'/>
                    <div className="search-date">
                        <input type="date" 
                            className='outline-none bg-transparent p-2 text-gray-400' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;