import { useState, useEffect } from 'react';
import './UserLocation.css';

const UserLocation = props => {
  const [locationContainer, setLocationContainer] = useState('hidden');
  const [locationText, setLocationText] = useState('');
  const [locationTimezone, setLocationTimezone] = useState('');

  useEffect(() => displayPosition(), []);

  const displayPosition = async function () {
    try {
      const pos = await props.getPosition();
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;

      //Reverse geocoding API
      const responseGeo = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
      if (!responseGeo.ok)
        throw new Error('Could not retrieve location. Server experiencing issues...');

      const dataGeo = await responseGeo.json();

      let city = dataGeo.city.toLowerCase();

      setLocationContainer('');
      setLocationText(`Your Current Location:`);
      setLocationTimezone(`${city[0].toUpperCase() + city.substring(1)}, ${dataGeo.statename}`);
    } catch (err) {
      console.error(err);
      window.location.reload();
    }
  };

  return (
    <div className={locationContainer + 'location'}>
      <h2>{locationText}</h2>
      <br />
      <h3 className="italics">{locationTimezone}</h3>
    </div>
  );
};

export default UserLocation;
