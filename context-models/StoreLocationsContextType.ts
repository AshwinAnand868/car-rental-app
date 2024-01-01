import Address from "@/models/Address"

export default interface StoreLocationsContextType {
    storesLocs: Array<Address>,
    setStoresLocs: (locs: Array<Address>) => void
}