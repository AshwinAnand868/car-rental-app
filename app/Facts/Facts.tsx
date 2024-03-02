import React from 'react'
import CountUp from 'react-countup';
import { BsEmojiSmile } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";

import './Facts.css';

const Facts = () => {
    return (
        <div className='tw-bg-gray-100 tw-mb-20 tw-py-[80px]'>
            <div className='container'>
                <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-5'>
                    <div className='tw-bg-white tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-5 tw-rounded-2xl'>
                        <div className='fact-icon tw-text-gray-400 tw-text-[50px] tw-border tw-border-gray-200 tw-p-5 tw-mb-5 tw-rounded-md'>
                            <BsEmojiSmile />
                        </div>
                        <h4 className='fact-text'><CountUp end={51040} duration={2} enableScrollSpy /></h4>
                        <span className='fact-text'>Customers</span>
                    </div>
                    <div className='tw-bg-white tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-5 tw-rounded-2xl'>
                        <div className='fact-icon tw-text-gray-400 tw-text-[50px] tw-border tw-border-gray-200 tw-p-5 tw-mb-5 tw-rounded-md'>
                            <SlSpeedometer />
                        </div>
                        <h4 className='fact-text'><CountUp end={20500} duration={2} enableScrollSpy /></h4>
                        <span className='fact-text'>Daily kilometers</span>
                    </div>
                    <div className='tw-bg-white tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-5 tw-rounded-2xl'>
                        <div className='fact-icon tw-text-gray-400 tw-text-[50px] tw-border tw-border-gray-200 tw-p-5 tw-mb-5 tw-rounded-md'>
                            <FaCar />
                        </div>
                        <h4 className='fact-text'><CountUp end={200} duration={2} enableScrollSpy /></h4>
                        <span className='fact-text'>Cabs</span>
                    </div>
                    <div className='tw-bg-white tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-5 tw-rounded-2xl'>
                        <div className='fact-icon tw-text-gray-400 tw-text-[50px] tw-border tw-border-gray-200 tw-p-5 tw-mb-5 tw-rounded-md'>
                            <PiSteeringWheelFill />
                        </div>
                        <h4 className='fact-text'><CountUp end={700} duration={2} enableScrollSpy /></h4>
                        <span className='fact-text'>Daily trips</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts