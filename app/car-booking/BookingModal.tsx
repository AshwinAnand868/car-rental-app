import Car from '@/models/Car';
import React from 'react'
import CarCard from '../home/CarCard';
import Form from './Form';

interface BookingModalProps {
    selectedCar: Car;
}

function BookingModal({selectedCar}: BookingModalProps) {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
        <div className='border-b-[1px] pb-2'>
          <h3 className='text-[30px] font-light text-gray-400'>
            Rent a Car Now!
          </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 p-5'>
          <div>
            <CarCard car={selectedCar} />
          </div>
          <div>
            <Form car={selectedCar}/>
          </div>
        </div>
    </div>
  )
}

export default BookingModal