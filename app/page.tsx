"use client"
import CarsFilterOptions from '@/components/Home/CarsFilterOptions'
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import { useEffect, useState } from 'react'
import { getCarsList } from '@/services'
import CarsListView from '@/components/Home/CarsListView'
import Car from '@/models/Car'
import CarsList from '@/models/CarsList';
import CarBrand from '@/models/CarBrand'

export default function Home() {

  const ALL_AVAILABLE_BRANDS = 'All Available Brands';
  const [carsList, setCarsList] = useState<Array<Car>>([]);
  const [carsOrgList, setCarsOrgList] = useState<Array<Car>>([]);

  useEffect(() => {
    carList();
  }, []);

  const carList = async () => {
    const result = await getCarsList() as CarsList;
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  } 

  const filterCarList = (brand: string) => {
    if(brand !== ALL_AVAILABLE_BRANDS){
      setCarsList(carsOrgList.filter((car: Car) => car.carBrand === brand));
    } else {
      setCarsList(carsOrgList);
    }
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOptions carsOrgList={carsOrgList} 
        setBrandType={value => filterCarList(value)}/>
      <CarsListView carLists={carsList}/>
    </div>  
  )
}
