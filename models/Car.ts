import CarBrand from "./CarBrand";
import CarType from "./CarType";

export default interface Car {
    id: string;
    name: string;
    price: number;
    carAvg: number;
    carType: CarType,
    carBrand: CarBrand,
    noOfSeats: number,
    image: {
        url: string
    }
}