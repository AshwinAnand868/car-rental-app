import { UserLocation } from '@/context-models/UserLocationContextType'
import { BusinessListContext } from '@/context/BusinessListContext'
import Address from '@/models/Address'
import { InfoBox, InfoWindow, MarkerF } from '@react-google-maps/api'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

interface MarkerProps {
  userLocation: UserLocation,
  businessProp: Address
}

const Marker = ({ userLocation, businessProp }: MarkerProps) => {

  const businessList = useContext(BusinessListContext);
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [showUserInfoWindow, setShowUserInfoWindow] = useState<any>();

  useEffect(() => {
    let idx: number = businessList?.findIndex((business) => business.name === businessProp.name) as number;
    setActiveMarkerId(idx);
    setShowUserInfoWindow(false);
  }, [businessProp])

  function handleActiveMarker(currentMarkerId: number): void {
    setShowUserInfoWindow(false);
    if (currentMarkerId === activeMarkerId) {
      return;
    }

    setActiveMarkerId(currentMarkerId);
  }

  const onFlightImageClick = (index: number) => {
    if (businessList) {
      window.open(`https://www.google.com/maps/dir/?api=1&origin=
    ${userLocation.lat},${userLocation.lng}&destination=${businessList[index].latitude},${businessList[index].longitude}
    &travelmode=driving`)
    }
  }

  return (
    <div>
      {businessList && businessList.map((business, index) => (
        <MarkerF
          key={index}
          position={new google.maps.LatLng(business.latitude, business.longitude)}
          onClick={() => handleActiveMarker(index)}
        >
          {activeMarkerId === index &&
            <InfoWindow
              onCloseClick={() => setActiveMarkerId(null)}
              options={{
                maxWidth: 310
              }}
            >
              <div className='tw-flex tw-items-center tw-gap-3 sm:tw-gap-1 md:tw-flex-row tw-flex-col'>
                <div className='tw-text-black sm:tw-text-[14px] tw-text-[9px]'>
                  <strong>Business Name: </strong><span>{business.name}</span><br />
                  <strong>Address: </strong><span>{business.location}</span>
                </div>
                <div className='tw-bg-slate-500 tw-rounded-md tw-w-10 tw-h-[36px] tw-p-2'>
                  <Image
                    className='hover:tw-scale-125 tw-transition-all tw-cursor-pointer'
                    src='/flight.png'
                    alt='flight'
                    width={20}
                    height={20}
                    onClick={() => onFlightImageClick(index)}
                  />
                </div>
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
            <span className='tw-ml-6 tw-font-bold tw-text-[16px]'><strong>You</strong></span>
          </InfoWindow>}
      </MarkerF>
    </div>
  )
}

export default Marker