import React, { useState } from 'react';

const WeatherDetails = (props) => {
  let [tempUnit, setTempUnit] = useState('C');
  let [tempValue, setTempValue] = useState(props.temperature);

  const handleUnitClick = () => {
    if (tempUnit === 'C') {
      setTempValue(tempValue * 1.8 + 32);
      setTempUnit('F');
    } else if (tempUnit === 'F') {
      setTempValue((tempValue - 32) / 1.8);
      setTempUnit('C');
    }
  }
  
  return (
    <div className="weatherDetails__main">
      <div className="weatherDetails__left_container">
        <div className="weatherDetails__icon">
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather forecast icon"/>
        </div>
        <div className="weatherDetails__temperature_container">
          <span className="weatherDetails__temperature">{Math.floor(tempValue)}</span>
          <div className={`weatherDetails__unit_click ${tempUnit === 'C' ? 'active' : ''}`}>
            <span 
              className="weatherDetails__unit"
              onClick={handleUnitClick}>&deg;C
            </span>
          </div>
          <span className="weatherDetails__vert_separator">|</span>  
          <div className={`weatherDetails__unit_click ${tempUnit === 'F' ? 'active' : ''}`}>
            <span 
              className="weatherDetails__unit" 
              onClick={handleUnitClick}>&deg;F
            </span>
          </div>
        </div>
      </div>
      <div className="weatherDetails__right_container">
        <div className="weatherDetails__precipitation">Precipitation: {props.precipitation}mm</div>
        <div className="weatherDetails__humidity">Humidity: {props.humidity}%</div>
        <div className="weatherDetails__wind">Wind: {Math.floor(props.windSpeed * 3.6)} km/h</div>
        <div className="weatherDetails__conditions">
          <button className="weatherDetails__conditions_button">Temperature</button>  
          <button className="weatherDetails__conditions_button">Precipitation</button>
          <button className="weatherDetails__conditions_button">Wind</button>
        </div> 
      </div>
    </div>
  );
}

export default WeatherDetails;