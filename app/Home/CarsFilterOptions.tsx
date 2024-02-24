import Car from '@/models/Car'
import CarBrand from '@/models/CarBrand'
import React, { useEffect, useState } from 'react'

interface CarsOrgListProp {
  carsOrgList: Array<Car>,
  setBrandType: (brand: string) => void,
  sortCarsByPrice: (orderingCriteria: string) => void
}

function CarsFilterOptions({ carsOrgList, setBrandType, sortCarsByPrice }: CarsOrgListProp) {

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
    if (carsOrgList) {
      filterCarList();
    }
  }, [carsOrgList]);

  return (
    <div className='tw-flex tw-flex-col sm:tw-flex-row tw-mt-8 tw-mb-5 tw-items-center tw-justify-between'>
      <div className='tw-text-center'>
        <span className='tw-text-[30px] tw-font-bold'>Cars Catalog</span>
        <p>Explore our cars you might like</p>
      </div>
      <div className='tw-flex tw-gap-5 tw-mt-5'>
        <select className="tw-select tw-select-bordered tw-w-full tw-max-w-xs" defaultValue='price'
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => sortCarsByPrice(e.target.value)}>
          <option value='price' disabled>Price</option>
          <option value={'ascending'}>Min to Max</option>
          <option value={'descending'}>Max to Min</option>
        </select>
        <select className="tw-select tw-select-bordered tw-w-full tw-max-w-xs md:tw-block" defaultValue='manufacturer'
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
