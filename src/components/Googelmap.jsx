import { loc } from '@/assets';
import { Circle, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';


const Googelmap = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const position = {
    lat: 13.053628352073545,
    lng: 80.252214263259,
  };

  


  return (
    <>
      {isBrowser && (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={position}
            zoom={18}
          >
            <Marker position={position} icon={loc.src}/>
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
};

export default Googelmap;
