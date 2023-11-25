import React from "react";

export interface BookingCreatedFlagContextType {
    showToastMsg: boolean, 
    setShowToastMsg: (value: boolean) => void,
    toastMsg: string,
    setToastMsg: (value: string) => void
}

export const BookingCreatedFlagContext = React.createContext<BookingCreatedFlagContextType | null>(null);