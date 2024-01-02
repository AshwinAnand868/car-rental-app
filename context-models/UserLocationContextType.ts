export interface UserLocation {
    lat: number,
    lng: number
}

export default interface UserLocationContextType {
    userLocation: UserLocation,
    setUserLocation: (obj: UserLocation) => void
}