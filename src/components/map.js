import { FaLocationPin } from 'react-icons/fa6';
import GoogleMapReact from "google-map-react";

const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

 const LocationPin = ({ text }) => (
    <div className="pin">
      <FaLocationPin />
      <p className="pin-text">{text}</p>
    </div>
  );

export const Map = ()=>{
    return (
        <div className="google-map">
                          <GoogleMapReact
                            bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
                            defaultCenter={location}
                            defaultZoom={17}>
                            <LocationPin
                              lat={location.lat}
                              lng={location.lng}
                              text={location.address}
                            />
                          </GoogleMapReact>
                    </div>
    )
}