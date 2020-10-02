import React from 'react';

import { WiSnow, WiDaySunnyOvercast, WiCloudy } from 'react-icons/wi';

const WeatherForecast = () => {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">London</h1>
      <div className="flex justify-between flex-row">
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
          <WiSnow className="text-6xl text-indigo-600 mb-1" />
          <span className="text-gray-800 text-xl font-bold">-5/+4</span>
          <span className="text-gray-600 font-semibold">11 Mon</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
          <WiSnow className="text-6xl text-indigo-600 mb-1" />
          <span className="text-gray-800 text-xl font-bold">-5/+4</span>
          <span className="text-gray-600 font-semibold">11 Mon</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
          <WiDaySunnyOvercast className="text-6xl text-orange-400 mb-1" />
          <span className="text-gray-800 text-xl font-bold">-5/+4</span>
          <span className="text-gray-600 font-semibold">11 Mon</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
          <WiCloudy className="text-6xl text-indigo-600 mb-1" />
          <span className="text-gray-800 text-xl font-bold">-5/+4</span>
          <span className="text-gray-600 font-semibold">11 Mon</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
          <WiDaySunnyOvercast className="text-6xl text-orange-400 mb-1" />
          <span className="text-gray-800 text-xl font-bold">-5/+4</span>
          <span className="text-gray-600 font-semibold">11 Mon</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
          <WiSnow className="text-6xl text-indigo-600 mb-1" />
          <span className="text-gray-800 text-xl font-bold">-5/+4</span>
          <span className="text-gray-600 font-semibold">11 Mon</span>
        </div>
        <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
          <WiSnow className="text-6xl text-indigo-600 mb-1" />
          <span className="text-gray-800 text-xl font-bold">-5/+4</span>
          <span className="text-gray-600 font-semibold">11 Mon</span>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;
