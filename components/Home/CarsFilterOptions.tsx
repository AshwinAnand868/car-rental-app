import Car from '@/models/Car'
import CarBrand from '@/models/CarBrand'
import CarsList from '@/models/CarsList'
import React, { useEffect, useState } from 'react'

interface CarsOrgListProp {
  carsOrgList: Array<Car>,
  setBrandType: (brand: string) => void 
}

function CarsFilterOptions({carsOrgList, setBrandType}: CarsOrgListProp) {

  const [brandList, setBrandList] = useState<CarBrand[]>();
  const carBrandSet = new Set();
  carBrandSet.add('All Available Brands');
  const filterCarList = () => {
    carsOrgList.forEach((element: Car) => {
      carBrandSet.add(element.carBrand); 
    });
    setBrandList(Array.from(carBrandSet) as CarBrand[]);
  }

  useEffect(() => {
    if(carsOrgList) {
      filterCarList();
    }
  }, [carsOrgList]);

  return (
    <div className='flex mt-10 items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className='flex gap-5'>
        <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Price</option>
            <option>Min to Max</option>
            <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs hidden md:block"
        onChange={e => setBrandType(e.target.value)}>
            <option disabled selected>Manufacturer</option>
            {brandList?.map((brand: CarBrand, index: number) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default CarsFilterOptions
