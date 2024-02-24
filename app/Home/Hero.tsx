import React, { MutableRefObject, Ref } from 'react'
import Image from 'next/image'

interface HeroProps {
    scrollToCarListRef: MutableRefObject<HTMLDivElement | null>
}

function Hero({scrollToCarListRef}: HeroProps) {

  const scrollToCarListAction = (elementRef: MutableRefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({
        behavior: 'smooth'
    });
  }

  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2">
        <div>
            <h2 className="tw-text-[40px] md:tw-text-[60px]
                tw-font-bold tw-mt-2">
                Premium Car <span className="tw-text-blue-600">Rental</span> in Your Area.
            </h2>
            <p className="tw-text-[20px] tw-text-gray-500 tw-pr-20 tw-mt-5 tw-mb-0">
                Book the selected car effortlessly, Pay for driving only, Book the Car Now
            </p>
            <button 
                className="tw-p-2 tw-mt-5 tw-bg-blue-500 tw-text-white tw-px-4 tw-rounded-full hover:tw-scale-105 tw-transition-all"
                onClick={() => scrollToCarListAction(scrollToCarListRef)}>
                    Explore Cars
            </button>
        </div>
        <div>
            <Image src='/hero.png'
                alt='hero'
                width={400}
                height={500}
                className='tw-w-full tw-object-cover tw-align-middle'
            />
        </div>
    </div>
  )
}

export default Hero;
