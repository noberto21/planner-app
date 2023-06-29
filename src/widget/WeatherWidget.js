import React, { Component } from 'react';
import API from '../utils/api';
import Header from './Header';
import WeatherDetails from './WeatherDetails';
import loading from '../images/loading.gif';

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currently: {},
      dataLoad: false,
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        API.fetchWeatherData(latitude, longitude)
          .then(result => result.json())
          .then(data => {
            this.setState({
              currently: data,
              dataLoad: true,
            })
          })
          .catch(() => {
            console.log('Something went wrong with fetch');
          })
      });
    } else {
      console.log('Geolocation is not available in this browser!');
    }
  }

  render() {
    const { currently } = this.state;
    return (
      <div className="weatherApp__container">
        {this.state.dataLoad ? 
        <div>
          <Header 
            location={currently.name} 
            datetime={currently.dt}
            summary={currently.weather[0].description}
          />
          <WeatherDetails
            icon={currently.weather[0].icon}
            temperature={currently.main.temp}
            precipitation={currently.rain || 0}
            humidity={currently.main.humidity}
            windSpeed={currently.wind.speed}
          />
        </div>
        : 
        <div className="weatherApp__loading">
          <img src={loading} alt="loading_spinner"/>
        </div>}
      </div>
    );
  }
}