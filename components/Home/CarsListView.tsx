import React from 'react'
import CarCard from './CarCard'
import Car from '@/models/Car'
import CarsList from '@/models/CarsList'

function CarsListView(props: CarsList) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {props.carLists.map((car: Car, index: number) => (
            <div>
                <CarCard car={car} key={index}/>
            </div>
        ))}
    </div>
  )
}

export default CarsListView
