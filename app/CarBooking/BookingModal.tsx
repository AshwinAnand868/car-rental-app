import Car from '@/models/Car';
import CarCard from '../Home/CarCard';
import Form from './Form';

interface BookingModalProps {
    selectedCar: Car;
}

function BookingModal({selectedCar}: BookingModalProps) {
  return (
    <div className="tw-modal-box tw-w-11/12 tw-max-w-5xl tw-h-[90vh] tw-max-h-[680px]">
        <div className='tw-border-b-[1px] tw-pb-2'>
          <h3 className='tw-text-[30px] tw-font-light tw-text-gray-400'>
            Rent a Car Now!
          </h3>
        </div>
        <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-p-5'>
          <div>
            <CarCard car={selectedCar} />
          </div>
          <div>
            <Form car={selectedCar}/>
          </div>
        </div>
    </div>
  )
}

export default BookingModal