"use client"
import CarsFilterOptions from '@/components/Home/CarsFilterOptions'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import { useEffect, useState } from 'react'
import { getCarsList } from '@/services'
import CarsListView from '@/components/Home/CarsListView'
import Car from '@/models/Car'
import CarsList from '@/models/CarsList';

export default function Home() {

  const [carsList, setCarsList] = useState<Array<Car>>([]);

  useEffect(() => {
    carList();
  }, []);

  const carList = async () => {
    const result = await getCarsList() as CarsList;
    setCarsList(result?.carLists);
  } 

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOptions />
      <CarsListView carLists={carsList}/>
    </div>  
  )
}
