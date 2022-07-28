import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={e => onTemperatureChange(e.target.value)} />
    </fieldset>
  );
};

export default TemperatureInput;
