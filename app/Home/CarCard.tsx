import React, { useEffect, useState } from 'react'
import Car from '@/models/Car'
import Image from 'next/image'
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

interface CarProps {
    car: Car
}

function CarCard({ car }: CarProps) {
    return car && (
        <div className='group tw-bg-gray-50 tw-p-2 sm:tw-p-5 tw-rounded-3xl tw-m-1 sm:tw-m-5 
            hover:tw-bg-white hover:tw-border-[1px] tw-cursor-pointer tw-duration-75 tw-border-blue-500'>
            <h2 className='tw-text-[20px]
            tw-font-medium tw-mb-2'>{car.name}</h2>
            <h2 className='tw-text-[28px] tw-font-bold tw-mb-2'>
                <span className='tw-text-[12px] tw-font-light'>$ </span>
                {car.price}
                <span className='tw-text-[12px] tw-font-light'> /day</span>
            </h2>

            <div className='tw-flex tw-justify-center tw-items-center'>
                <Image src={car?.image?.url}
                    alt={car.name}
                    width={220}
                    height={200}
                    className='tw-w-[250px] tw-h-[150px] tw-mb-3 tw-object-contain' />
            </div>

            <div className='tw-flex tw-justify-around group-hover:tw-hidden'>
                <div className='tw-text-center tw-text-gray-500'>
                    <PiSteeringWheelFill className='tw-w-full tw-text-[20px] tw-mb-2' />
                    <h2 className='tw-text-[14px] tw-font-light'>{car?.carType}</h2>
                </div>
                <div className='tw-text-center tw-text-gray-500'>
                    <MdAirlineSeatReclineNormal className='tw-w-full tw-text-[22px] tw-mb-2' />
                    <h2 className='tw-text-[14px] tw-font-light'>{car?.noOfSeats}</h2>
                </div>
                <div className='tw-text-center tw-text-gray-500'>
                    <FaGasPump className="tw-w-full tw-text-[22px] tw-mb-2" />
                    <h2 className='tw-text-[14px] tw-font-light'>{car?.carAvg} MPG</h2>
                </div>
            </div>
            <button className='tw-hidden group-hover:tw-flex tw-bg-gradient-to-r 
            tw-from-blue-400 to blue-700 tw-p-2 tw-rounded-lg tw-tw-text-white 
            tw-w-full tw-px-5 tw-justify-between'>
                Rent Now
                <span className='tw-bg-blue-400 tw-p-1 tw-rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="currentColor"
                        className="tw-w-4 tw-h-4 tw-text-white">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default CarCard
