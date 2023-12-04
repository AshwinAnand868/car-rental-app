"use client"
import CarsFilterOptions from '@/app/Home/CarsFilterOptions'
import Hero from '@/app/Home/Hero'
import SearchInput from '@/app/Home/SearchInput'
import { useEffect, useRef, useState } from 'react'
import { getCarsList } from '@/services'
import CarsListView from '@/app/Home/CarsListView'
import Car from '@/models/Car'
import CarsList from '@/models/CarsList';
import ToastMsg from '@/app/ToastMsgView'
import { BookingCreatedFlagContext } from '@/context/BookingCreatedFlagContext'

export default function Home() {

  const ALL_AVAILABLE_BRANDS = 'All Available Brands';
  const [carsList, setCarsList] = useState<Array<Car>>([]);
  const [carsOrgList, setCarsOrgList] = useState<Array<Car>>([]);
  const sortingOrder = useRef('');
  const selectedBrand = useRef('');
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('');

  useEffect(() => {
    carList();
  }, []);

  useEffect(() => {
    if(showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(false);
      }, 5000);
    }
  }, [showToastMsg]);

  const carList = async () => {
    const result = await getCarsList() as CarsList;
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  } 

  const filterCarList = (brand: string) => {
    selectedBrand.current = brand;
    let filteredOutCars = [];
    if(brand !== ALL_AVAILABLE_BRANDS){
      filteredOutCars = carsOrgList.filter((car: Car) => car.carBrand === brand);
    } else {
      filteredOutCars = [...carsOrgList];
    }

    if(sortingOrder.current !== '') {
      filteredOutCars.sort((carA: Car, carB: Car) => 
        sortingOrder.current === 'ascending' ? 
          carA.price - carB.price
          : carB.price - carA.price
      );
    }
    setCarsList(filteredOutCars);
  }    
  
  const sortCarsByPrice = (orderingCriteria: string) => {
    sortingOrder.current = orderingCriteria;

    let orgListCopy = [...carsOrgList];
    if(selectedBrand.current !== '' && selectedBrand.current !== ALL_AVAILABLE_BRANDS) {
      orgListCopy = orgListCopy.filter((car: Car) => car.carBrand === selectedBrand.current);
    }

    const sortedCars = orgListCopy.sort((carA: Car, carB: Car) => 
      orderingCriteria === 'ascending' ? 
        carA.price - carB.price 
        : carB.price - carA.price
    );
    setCarsList(sortedCars);
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
        <Hero />
        <SearchInput />
        <CarsFilterOptions carsOrgList={carsOrgList} 
          setBrandType={(value: string) => filterCarList(value)}
          sortCarsByPrice={(orderingCriteria: string) => sortCarsByPrice(orderingCriteria)}
        />
        <BookingCreatedFlagContext.Provider value={{
          showToastMsg,
          setShowToastMsg,
          toastMsg,
          setToastMsg
        }}>
          <CarsListView carLists={carsList}/>
          { showToastMsg ? <ToastMsg msg={toastMsg}/> : null }
        </BookingCreatedFlagContext.Provider>
    </div>  
  )
}
