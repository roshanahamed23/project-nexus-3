import { loc } from '@/assets';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

const Googelmap = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

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

  const onLoad = () => {
    setMapLoaded(true);
  };

  return (
    <>
      {isBrowser && (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={position}
            zoom={14}
            onLoad={onLoad}
          >
            {mapLoaded && (
              <Marker
                position={position}
                icon={{
                  url: loc,
                  scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
};

export default Googelmap;
