import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import berlin from '../assets/images/berlin.jpg';
import london from '../assets/images/london.jpg';
import newyork from '../assets/images/newyork.jpg';
import tokyo from '../assets/images/tokyo.jpg';

interface Props {
  // eslint-disable-next-line no-unused-vars
  getWeather: (lat: number, lon: number, activeCity: string) => Promise<void>;
  currentCity: string;
}

type customCityObject = {
  lat: number;
  lng: number;
  city: string;
};

const CitiesList: React.FC<Props> = ({ getWeather, currentCity }) => {
  const [activeCity, setActiveCity] = useState<string>(currentCity);
  const [customCity, setCustomCity] = useState<customCityObject>({
    lat: 0,
    lng: 0,
    city: 'Add your city',
  });

  useEffect(() => {
    const localObject = localStorage.getItem('customCity')
      ? JSON.parse(localStorage.getItem('customCity') || '')
      : {
          lat: 0,
          lng: 0,
          city: 'Add your city',
        };

    setCustomCity(localObject);
  }, []);

  const { city, lat, lng } = customCity;

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
          </div>
          <span
            className={`${
              activeCity === 'Tokyo' ? 'text-indigo-600' : 'text-gray-800'
            } text-xl font-bold mt-4`}
          >
            Tokyo
          </span>
        </button>

        {city === 'Add your city' ? (
          <Link
            className="flex flex-col items-center focus:outline-none"
            to="/settings"
          >
            <div className="h-40 w-56 rounded-lg relative overflow-auto">
              <div className="h-full bg-gray-200 flex flex-col content-center justify-center" />
            </div>
            <span
              className={`${
                activeCity === city ? 'text-indigo-600' : 'text-gray-800'
              } text-xl font-bold mt-4`}
            >
              {city}
            </span>
          </Link>
        ) : (
          <button
            className="flex flex-col items-center focus:outline-none"
            onClick={() => {
              getWeather(lat, lng, city);
              setActiveCity(city);
            }}
            type="button"
          >
            <div className="h-40 w-56 rounded-lg relative overflow-auto">
              <div className="h-full bg-gray-200 flex flex-col content-center justify-center">
                <span className="text-gray-600 font-semibold">
                  User&apos;s city
                </span>
              </div>
            </div>
            <span
              className={`${
                activeCity === city ? 'text-indigo-600' : 'text-gray-800'
              } text-xl font-bold mt-4`}
            >
              {city}
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default CitiesList;
