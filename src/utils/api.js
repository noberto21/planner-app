const API_KEY = '6c8ca7a74ad9d3301728396fc82b6227';

export default {
  fetchWeatherData: (lat, lon) => (
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  )
};