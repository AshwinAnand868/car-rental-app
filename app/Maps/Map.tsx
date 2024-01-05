import UserLocationContextType, { UserLocation } from '@/context-models/UserLocationContextType';
import { UserLocationContext } from '@/context/UserLocationContext';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React, { useContext, useState } from 'react'
import Marker from './Marker';

const Map = () => {
    
    const {userLocation, setUserLocation} = useContext(UserLocationContext) as UserLocationContextType;

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    });

    if(!isLoaded) return <div>Loading...</div>

    const containerStyle = {
        width: '100%',
        height: '550px',
        borderRadius: 20
    };

    const center = {
        lat: userLocation.lat,
        lng: userLocation.lng
    }  

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker userLocation={userLocation}/>
            </GoogleMap>
        </div>
    )
}

export default Map;