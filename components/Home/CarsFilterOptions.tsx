import Car from '@/models/Car'
import CarBrand from '@/models/CarBrand'
import React, { useEffect, useState } from 'react'

interface CarsOrgListProp {
  carsOrgList: Array<Car>,
  setBrandType: (brand: string) => void,
  sortCarsByPrice: (orderingCriteria: string) => void
}

function CarsFilterOptions({carsOrgList, setBrandType, sortCarsByPrice}: CarsOrgListProp) {

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
    <div className='flex flex-col sm:flex-row mt-8 mb-5 items-center justify-between'>
      <div className='text-center'>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className='flex gap-5 mt-5'>
        <select className="select select-bordered w-full max-w-xs" defaultValue='price'
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => sortCarsByPrice(e.target.value)}>
            <option value='price' disabled>Price</option>
            <option value={'ascending'}>Min to Max</option>
            <option value={'descending'}>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs md:block" defaultValue='manufacturer'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBrandType(e.target.value)}>
            <option value='manufacturer' disabled>Manufacturer</option>
            {brandList?.map((brand: CarBrand, index: number) => (
              <option key={index} value={brand}>{brand}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default CarsFilterOptions
