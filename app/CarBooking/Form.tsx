import { BookingCreatedFlagContext } from '@/context/BookingCreatedFlagContext';
import Car from '@/models/Car';
import { FormDataModel } from '@/models/FormDataModel';
import { createBooking } from '@/services';
import React, { useContext, useEffect, useState } from 'react'
import Address from '@/models/Address';
import BookingCreatedFlagContextType from '@/context-models/BookingCreatedFlagContextType';
import StoreLocationsContextType from '@/context-models/StoreLocationsContextType';
import { StoreLocationsContext } from '@/context/StoreLocationsContext';

interface FormProps {
  car: Car
}

function Form({car}: FormProps) {
  const [formValue, setFormValue] = useState<FormDataModel>({
    location: '',
    pickUpDate: new Date(),
    dropOffDate: new Date(),
    pickUpTime: '',
    dropOffTime: '',
    contactNumber: '',
    userName: '',
    carId: ''
  });

  const {
    showToastMsg, 
    setShowToastMsg,
    toastMsg,
    setToastMsg
  } = useContext(BookingCreatedFlagContext) as BookingCreatedFlagContextType;
  
  const {
    storesLocs
  } = useContext(StoreLocationsContext) as StoreLocationsContextType;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValue({
        ...formValue,
        carId: car.id,
        [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async () => {
    const responseObj = await createBooking(formValue);
    if(responseObj){
      setShowToastMsg(true);
      setToastMsg('Booking Created Succesfully!');
    }
  }

  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className="text-gray-400">PickUp Location</label>
            <select className="select select-bordered w-full max-w-lg"
            name="location" onChange={handleChange} defaultValue='pickupLocation'>
                <option value='pickupLocation'>Pickup Location</option>
                {storesLocs && storesLocs.map((address: Address, index: number) => (
                    <option key={index} value={address?.location}>{address?.location}</option>
                ))}
            </select>
        </div>
        <div className='flex flex-col sm:flex-row gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Date</label>
                <input type="date" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' name='pickUpDate' onChange={handleChange} />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop off Date</label>
                <input type="date" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' name='dropOffDate' onChange={handleChange} />
            </div>
        </div>
        <div className='flex gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Time</label>
                <input type="time" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' name='pickUpTime' onChange={handleChange} />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop Off Time</label>
                <input type="time" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' name='dropOffTime' onChange={handleChange} />
            </div>
        </div>
        <div className='w-full mb-5'>
            <label className='text-gray-400'>User Name</label>
            <input type="text" placeholder='Type here' name='userName'
                className='input input-bordered w-full max-w-lg' onChange={handleChange} />
        </div>
        <div className='w-full mb-5'>
            <label className='text-gray-400'>Contact Number</label>
            <input type="text" placeholder='Type here' name='contactNumber'
                className='input input-bordered w-full max-w-lg' onChange={handleChange} />
        </div>
        <div className="modal-action">
          <form method="dialog">
              <button className='btn mr-5'>Close</button>
              <button 
                className='btn bg-blue-500 text-white hover:bg-blue-800 gap-6'
                onClick={handleSubmit}>
                Save
              </button>
          </form>
        </div>
    </div>
  )
}

export default Form