import React, { useState } from 'react';

import beijing from '../assets/images/beijing.jpg';
import berlin from '../assets/images/berlin.jpg';
import london from '../assets/images/london.jpg';
import newyork from '../assets/images/newyork.jpg';
import tokyo from '../assets/images/tokyo.jpg';
import { CityList } from '../types';

interface Props {
  // eslint-disable-next-line no-unused-vars
  getWeather: (lat: number, lon: number, activeCity: CityList) => Promise<void>;
}

const CitiesList: React.FC<Props> = ({ getWeather }) => {
  const [activeCity, setActiveCity] = useState<CityList>('London');

  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Weather Forecast
      </h1>
      <div className="flex justify-between">
        <button
          className="flex flex-col items-center focus:outline-none"
          onClick={() => {
            getWeather(51.5, -0.12, 'London');
            setActiveCity('London');
          }}
          type="button"
        >
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={london} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              12:31
            </div>
          </div>
          <span
            className={`${
              activeCity === 'London' ? 'text-indigo-600' : 'text-gray-800'
            } text-xl font-bold mt-4`}
          >
            London
          </span>
        </button>

        <button
          className="flex flex-col items-center focus:outline-none"
          onClick={() => {
            getWeather(52.5, 13.4, 'Berlin');
            setActiveCity('Berlin');
          }}
          type="button"
        >
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={berlin} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span
            className={`${
              activeCity === 'Berlin' ? 'text-indigo-600' : 'text-gray-800'
            } text-xl font-bold mt-4`}
          >
            Berlin
          </span>
        </button>

        <button
          className="flex flex-col items-center focus:outline-none"
          onClick={() => {
            getWeather(40.7, -73.9, 'New York');
            setActiveCity('New York');
          }}
          type="button"
        >
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={newyork} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span
            className={`${
              activeCity === 'New York' ? 'text-indigo-600' : 'text-gray-800'
            } text-xl font-bold mt-4`}
          >
            New York
          </span>
        </button>

        <button
          className="flex flex-col items-center focus:outline-none"
          onClick={() => {
            getWeather(35.6, 139.8, 'Tokyo');
            setActiveCity('Tokyo');
          }}
          type="button"
        >
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={tokyo} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span
            className={`${
              activeCity === 'Tokyo' ? 'text-indigo-600' : 'text-gray-800'
            } text-xl font-bold mt-4`}
          >
            Tokyo
          </span>
        </button>

        <button
          className="flex flex-col items-center focus:outline-none"
          onClick={() => {
            getWeather(39.9, 116.3, 'Beijing');
            setActiveCity('Beijing');
          }}
          type="button"
        >
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={beijing} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span
            className={`${
              activeCity === 'Beijing' ? 'text-indigo-600' : 'text-gray-800'
            } text-xl font-bold mt-4`}
          >
            Beijing
          </span>
        </button>
      </div>
    </section>
  );
};

export default CitiesList;
