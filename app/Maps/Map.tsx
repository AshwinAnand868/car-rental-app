import UserLocationContextType, { UserLocation } from '@/context-models/UserLocationContextType';
import { UserLocationContext } from '@/context/UserLocationContext';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React, { useContext, useState } from 'react'
import Marker from './Marker';
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';
import SelectedBusinessContextType from '@/context-models/SelectedBusinessContextType';

const Map = () => {

    const {userLocation, setUserLocation} = useContext(UserLocationContext) as UserLocationContextType;
    const { selectedBusiness, setSelectedBusiness } = useContext(SelectedBusinessContext) as SelectedBusinessContextType;
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    });

    if(!isLoaded) return <div>Loading...</div>

    const containerStyle = {
        width: '100%',
        height: '550px',
        borderRadius: 20
    };

    const user = {
        lat: userLocation.lat,
        lng: userLocation.lng
    }  

    const business = {
        lat: selectedBusiness.latitude,
        lng: selectedBusiness.longitude
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={!selectedBusiness ? user : business}
                zoom={10}
            >
                <Marker userLocation={userLocation} businessProp={selectedBusiness}/>
            </GoogleMap>
        </div>
    )
}

export default Map;