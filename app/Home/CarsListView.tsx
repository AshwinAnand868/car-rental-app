import React, { useEffect, useState } from 'react'
import CarCard from './CarCard';
import Car from '@/models/Car'
import CarsList from '@/models/CarsList'
import CarCardSkelton from './CarCardSkelton';
import BookingModal from '../car-booking/BookingModal';

function CarsListView(props: CarsList) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCar, setSelectedCar] = useState<Car>();

  useEffect(() => {
    if(props.carLists) {
      setIsLoading(false);
    }
  }, [props.carLists]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {!isLoading ? props.carLists.map((car: Car, index: number) => (
            <div key={index} 
              onClick={() => {
                (window as any).booking_modal.showModal();
                setSelectedCar(car);
              }}>
                <CarCard car={car}/>
            </div>
        )): [1,2,3,4,5,6,7,8].map((_, index) => (
          <CarCardSkelton key={index}/>
        ))}

      <dialog id="booking_modal" className="modal">
          <BookingModal selectedCar={selectedCar!}/>
      </dialog>
    </div>
  )
}

export default CarsListView
