import { getStoreLocations } from '@/services';
import React, { useEffect, useState } from 'react'

interface Address {
    address: string
}

interface StoreLocation {
    storesLocations: Array<Address>
}

function Form() {

  const [storeLocation, setStoreLocation] = useState<StoreLocation>();
    
  useEffect(() => {
    storeLocations();
  }, []);

  const storeLocations = async () => {
    const locations = await getStoreLocations() as StoreLocation;
    setStoreLocation(locations);
    console.log(locations);
  }

  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className="text-gray-400">PickUp Location</label>
            <select className="select select-bordered w-full max-w-lg"
            name="location">
                <option disabled selected>Pickup Location?</option>
                {storeLocation && storeLocation.storesLocations.map((address: Address, index: number) => (
                    <option key={index}>{address?.address}</option>
                ))}
            </select>
        </div>
        <div className='flex gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Date</label>
                <input type="date" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg'  name='pickUpDate' />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop off Date</label>
                <input type="date" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' name='dropOffDate' />
            </div>
        </div>
        <div className='flex gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Time</label>
                <input type="time" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' name='pickUpTime' />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop Off Time</label>
                <input type="time" placeholder='Type here' 
                    className='input input-bordered w-full max-w-lg' name='dropOffTime'/>
            </div>
        </div>
        <div className='w-full mb-5'>
            <label className='text-gray-400'>Contact Number</label>
            <input type="text" placeholder='Type here' name='contactNumber'
                className='input input-bordered w-full max-w-lg' />
        </div>
        <div className="modal-action">
          <form method="dialog">
              <button className='btn mr-5'>Close</button>
              <button 
              className='btn bg-blue-500 text-white hover:bg-blue-800 gap-6'>
                Save
              </button>
          </form>
        </div>
    </div>
  )
}

export default Form