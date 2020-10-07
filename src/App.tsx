import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles/main.css';

import Sidebar from './components/Sidebar';
import CitiesList from './components/CitiesList';
import WeatherForecast from './components/WeatherForecast';
import WeatherGraph from './components/WeatherGraph';
import { WeatherData, CityList } from './types';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    current: {
      dt: 0,
      humidity: 0,
      temp: 0,
      windSpeed: 0,
      precipitation: 0,
      weather: 'Clear',
      city: 'London',
    },
    daily: [
      {
        dt: 0,
        tempMax: 0,
        tempMin: 0,
        weather: 'Clear',
      },
    ],
  });

  const getWeather = async (lat: number, lon: number, activeCity: CityList) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=9b50d0883faabc0bbbbd08bdaf9c1f57&units=metric`,
    );
    const { data } = res;
    const { current, daily } = data;

    const forecast = daily.map((day: any) => ({
      dt: day.dt,
      tempMax: day.temp.max,
      tempMin: day.temp.min,
      weather: day.weather[0].main,
    }));

    forecast.shift();

    setWeatherData({
      current: {
        dt: current.dt,
        humidity: current.humidity,
        temp: current.temp,
        windSpeed: current.wind_speed,
        precipitation: current.rain || 0,
        weather: current.weather[0].main,
        city: activeCity,
      },
      daily: forecast,
    });
  };

  useEffect(() => {
    getWeather(51.5, -0.12, 'London');
  }, []);

  return (
    <div className="flex">
      <Sidebar current={weatherData.current} />
      <main className=" container mx-auto flex flex-col mt-8">
        <CitiesList getWeather={getWeather} />
        <WeatherForecast daily={weatherData.daily} />
        <WeatherGraph daily={weatherData.daily} />
      </main>
    </div>
  );
}

export default App;
