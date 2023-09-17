import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "40f25cef362f4f6590c517d5a721927e",
  });
  const center = useMemo(() => ({ lat: 12.9147928, lng: 77.5865094 }), []);
  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </>
  );
};

export default MapComponent;




