import CarBrand from "./CarBrand";
import CarType from "./CarType";

export default interface Car {
    id: string;
    sku: string;
    name: string;
    price: number;
    currency: string; 
    carAvg: number;
    carType: CarType,
    carBrand: CarBrand,
    noOfSeats: number,
    image: string
}