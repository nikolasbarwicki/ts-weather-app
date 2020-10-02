import React from 'react';
import './styles/main.css';

import Sidebar from './components/Sidebar';
import CitiesList from './components/CitiesList';
import WeatherForecast from './components/WeatherForecast';
import WeatherGraph from './components/WeatherGraph';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className=" container mx-auto flex flex-col mt-8">
        <CitiesList />
        <WeatherForecast />
        <WeatherGraph />
      </main>
    </div>
  );
}

export default App;
