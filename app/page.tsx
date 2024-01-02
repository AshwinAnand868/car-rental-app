"use client"

import Home from "@/app/Home/page"
import { UserLocation } from "@/context-models/UserLocationContextType"
import { UserLocationContext } from '@/context/UserLocationContext'
import { useEffect, useState } from "react"

export default function Page() {

  const [userLocation, setUserLocation] = useState<UserLocation>();

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    })
  }

  return (
    <UserLocationContext.Provider value={ userLocation ? {
      userLocation,
      setUserLocation
    } : null}>
      <Home></Home>
    </UserLocationContext.Provider>
  )
}
