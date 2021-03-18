import React, { useState, useEffect } from 'react';
import { latitude, longitude } from '../../functions/getPosition.js';
import './MoonStatus.css';
import MoonIcon from './MoonIcon/MoonIcon';

let moonPhase;
const MoonStatus = () => {
  const [moonDescription, setMoonDescription] = useState('hidden');
  const [moonText, setMoonText] = useState('');
  const [moonIllumination, setMoonIllumination] = useState('');

  useEffect(() => getMoonPhase(), []);

  //Retrieve moon data and render it
  const getMoonPhase = async function () {
    try {
      //Weather API--Astronomy
      const responseMoon = await fetch(
        `https://api.weatherapi.com/v1/astronomy.json?key=61e062c61e5149e1a5b01136212302&q=${latitude},${longitude}`
      );
      if (!responseMoon.ok)
        throw new Error('Could not retrieve current moon phase. Sever experiencing issues');

      const dataMoon = await responseMoon.json();

      moonPhase = String(dataMoon.astronomy.astro.moon_phase);

      setMoonDescription('');
      setMoonText(moonPhase);
      setMoonIllumination(`${dataMoon.astronomy.astro.moon_illumination}% Illumination`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <div className={moonDescription + 'container'}>
        <h4>Current Moon Phase:</h4>
        <h1>{moonText}</h1>
        <br />
        <h2 className="illumination">{moonIllumination}</h2>
      </div>
      {moonPhase && <MoonIcon moonPhase={moonPhase} />}
    </React.Fragment>
  );
};

export default MoonStatus;
