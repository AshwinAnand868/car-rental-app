export default interface BookingCreatedFlagContextType {
    showToastMsg: boolean, 
    setShowToastMsg: (value: boolean) => void,
    toastMsg: string,
    setToastMsg: (value: string) => void
}
