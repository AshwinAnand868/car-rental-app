import React from 'react'

function CarCardSkelton() {
  return (
    <div>
        <div className="tw-rounded-md tw-p-4 tw-max-w-sm tw-w-full tw-mx-auto">
            <div className="tw-animate-pulse tw-flex tw-space-x-4">
                <div className="tw-rounded-3xl 
                tw-bg-slate-200 tw-h-[361px] 
                tw-w-[280px]">
                  <div className='tw-bg-gray-300 tw-w-[250px] tw-h-[150px]
                    tw-mx-auto tw-mt-[140px]'></div>
                  <div className='tw-grid tw-grid-cols-3 tw-gap-3'>
                    {[1,2,3].map(() => (
                        <div className="tw-rounded-full tw-bg-gray-300 tw-h-12 tw-w-12
                      tw-mt-[10px] tw-ml-[20px]"></div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarCardSkelton