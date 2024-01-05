import { UserLocation } from '@/context-models/UserLocationContextType'
import { BusinessListContext } from '@/context/BusinessListContext'
import { InfoBox, InfoWindow, MarkerF } from '@react-google-maps/api'
import React, { useContext, useState } from 'react'

interface MarkerProps {
  userLocation: UserLocation
}

const Marker = ({ userLocation }: MarkerProps) => {

  const businessList = useContext(BusinessListContext);
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [showUserInfoWindow, setShowUserInfoWindow] = useState<any>();

  function handleActiveMarker(currentMarkerId: number): void {
    setShowUserInfoWindow(false);
    if (currentMarkerId === activeMarkerId) {
      return;
    }

    setActiveMarkerId(currentMarkerId);
  }

  return (
    <div className='avbc'>
      {businessList && businessList.map((business, index) => (
        <MarkerF
          key={index}
          position={new google.maps.LatLng(business.latitude, business.longitude)}
          onClick={() => handleActiveMarker(index)}
        >
          {activeMarkerId === index && <InfoWindow onCloseClick={() => setActiveMarkerId(null)}>
            <div className='text-black'>
              <strong className='text-[14px]'>Business Name: </strong><span>{business.name}</span><br />
              <strong className='text-[14px]'>Address: </strong><span>{business.location}</span>
            </div>
          </InfoWindow>}

        </MarkerF>
      ))}
      <MarkerF
        position={userLocation}
        icon={{
          url: '/user-location.png',
          scaledSize: new google.maps.Size(50, 50)
        }}
        onClick={() => setShowUserInfoWindow(true)}
      >
        {showUserInfoWindow &&
          <InfoWindow 
            options={{
              minWidth: 100
            }}
            onCloseClick={() => setShowUserInfoWindow(false)}
          >
            <span className='ml-6 font-bold text-[16px]'><strong>You</strong></span>
          </InfoWindow>}
      </MarkerF>
    </div>
  )
}

export default Marker