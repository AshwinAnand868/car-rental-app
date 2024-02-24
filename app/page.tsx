"use client"

import Home from "@/app/Home/page"
import { UserLocation } from "@/context-models/UserLocationContextType"
import { UserLocationContext } from '@/context/UserLocationContext'
import { useEffect, useState } from "react"

export default function Page() {

  const [userLocation, setUserLocation] = useState<UserLocation>({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    })
  }

  return (
    <UserLocationContext.Provider value={{
      userLocation,
      setUserLocation
    }}>
      <Home></Home>
    </UserLocationContext.Provider>
  )
}
