import { useState } from 'react';
import { fetchWeather } from '../services/weatherservice';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const getWeather = async () => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;