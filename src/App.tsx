// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import React from 'react';
import './styles/main.css';

import Sidebar from './components/Sidebar';
import CitiesList from './components/CitiesList';
import WeatherForecast from './components/WeatherForecast';
import WeatherGraph from './components/WeatherGraph';
import { DailyForecast } from './components/types';

function App() {
  // const [weatherData, setWeatherData] = useState({});

  // useEffect(() => {
  //   const getWeather = async () => {
  //     const res = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=51.509865&lon=-0.118092&exclude=minutely,hourly,alerts&appid=9b50d0883faabc0bbbbd08bdaf9c1f57&units=metric`,
  //     );
  //     const { data } = res;
  //     setWeatherData(data);
  //   };

  //   getWeather();
  // }, []);

  interface weatherDataType {
    daily: DailyForecast[];
  }

  const weatherData: weatherDataType = {
    daily: [
      {
        temp: {
          min: 11.94,
          max: 15.39,
        },
        weather: [
          { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' },
        ],
      },
      {
        temp: {
          min: 10.73,
          max: 15.04,
        },
        weather: [
          { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
        ],
      },
      {
        temp: {
          min: 12.71,
          max: 16.14,
        },
        weather: [
          {
            id: 502,
            main: 'Rain',
            description: 'heavy intensity rain',
            icon: '10d',
          },
        ],
      },
      {
        temp: {
          min: 11.2,
          max: 13.56,
        },
        weather: [
          { id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' },
        ],
      },
      {
        temp: {
          min: 8.51,
          max: 13.97,
        },
        weather: [
          { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
        ],
      },
      {
        temp: {
          min: 8.15,
          max: 12.84,
        },
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
        ],
      },
      {
        temp: {
          min: 7.84,
          max: 12.68,
        },
        weather: [
          { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
        ],
      },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className=" container mx-auto flex flex-col mt-8">
        <CitiesList />
        <WeatherForecast data={weatherData} />
        <WeatherGraph data={weatherData} />
      </main>
    </div>
  );
}

export default App;
