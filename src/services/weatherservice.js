// NOTE: API_KEY and BASE_URL must be specified.

const API_KEY = 'your-api-key-here';
const BASE_URL = 'weather-api-here';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};