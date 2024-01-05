export default interface Address {
    name: string,
    location: string,
    latitude: number,
    longitude: number,
    rating: number,
    image?: {
        url: string
    },
    distanceFromUser?: number // this tracks the distance (in Kms) of the store from current user location
}
