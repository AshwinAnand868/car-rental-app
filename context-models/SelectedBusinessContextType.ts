import Address from "@/models/Address";

export default interface SelectedBusinessContextType {
    selectedBusiness: Address,
    setSelectedBusiness: (value: Address) => void
}