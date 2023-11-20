import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import Car from '@/models/Car'
import CarsList from '@/models/CarsList'
import CarCardSkelton from './CarCardSkelton';

function CarsListView(props: CarsList) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedCar, setSelectedCar] = useState<Car>();

  useEffect(() => {
    if(props.carLists) {
      setIsLoading(false);
    }
  }, [props.carLists]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {!isLoading ? props.carLists.map((car: Car, index: number) => (
            <div key={index}>
                <CarCard car={car}/>
            </div>
        )): [1,2,3,4,5].map((item) => (
          <CarCardSkelton/>
        ))}
    </div>
  )
}

export default CarsListView
