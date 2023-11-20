import React from 'react'

function CarCardSkelton() {
  return (
    <div>
        <div className="rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-3xl 
                bg-slate-200 h-[361px] 
                w-[280px]">
                  <div className='bg-gray-300 w-[250px] h-[150px]
                    mx-auto mt-[140px]'></div>
                  <div className='grid grid-cols-3 gap-3'>
                    {[1,2,3].map(() => (
                        <div className="rounded-full bg-gray-300 h-12 w-12
                      mt-[10px] ml-[20px]"></div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarCardSkelton