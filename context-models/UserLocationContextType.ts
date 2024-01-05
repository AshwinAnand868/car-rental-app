export class UserLocation {
    lat: number;
    lng: number;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}

export default interface UserLocationContextType {
    userLocation: UserLocation,
    setUserLocation: (obj: UserLocation) => void
}