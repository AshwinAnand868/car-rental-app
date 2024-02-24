import React from 'react'

const BusinessItemSkelton = () => {
  return (
    <div className='tw-rounded-md tw-p-2 tw-max-w-sm tw-w-full'>
      <div className='tw-animate-pulse tw-flex tw-space-x-4'>
        <div className='tw-rounded-2xl tw-bg-slate-200 tw-h-[90px] tw-w-[90px]' />
        <div className='tw-flex-1 tw-space-y-6 tw-py-1'>
          <div className='tw-h-5 tw-bg-slate-200 tw-rounded' />
          <div className='tw-space-y-3'>
            <div className='tw-grid tw-grid-cols-3 tw-gap-4'>
              <div className="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-2"></div>
              <div className="tw-h-2 tw-bg-slate-200 tw-rounded tw-col-span-1"></div>
            </div>
            <div className="tw-h-2 tw-bg-slate-200 tw-rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessItemSkelton