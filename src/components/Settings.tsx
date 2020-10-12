import React, { useState } from 'react';
import axios from 'axios';

type cityType = string;
type cityCoords = {
  lat: number;
  lng: number;
};

interface Props {
  // eslint-disable-next-line no-unused-vars
  getWeather: (lat: number, lon: number, activeCity: string) => Promise<void>;
}

const Settings: React.FC<Props> = ({ getWeather }) => {
  const [customCity, setCustomCity] = useState<cityType>('');
  const [customCityCoords, setCustomCityCoords] = useState<cityCoords>({
    lat: 0,
    lng: 0,
  });

  const getCityCoordinates = async () => {
    const API_KEY = '2dfa092d91084e36ab22dc6ab2db8477';

    const res = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${customCity}&key=${API_KEY}`,
    );
    const { data } = res;

    setCustomCityCoords({ ...data.results[0].geometry });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Add your city</h1>
      <form className="w-full max-w-xl">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="city-name"
            >
              City name
            </label>
          </div>

          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              id="city-name"
              type="text"
              value={customCity}
              onChange={(e) => setCustomCity(e.target.value)}
              autoComplete="disabled"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="latitude"
            >
              Latitude
            </label>
          </div>

          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-500 font-semibold leading-tight  "
              id="latitude"
              type="text"
              value={customCityCoords.lat}
              disabled
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="Longitude"
            >
              Longitude
            </label>
          </div>

          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-500 font-semibold leading-tight "
              id="Longitude"
              type="text"
              value={customCityCoords.lng}
              disabled
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-1/3 mr-2">
            <button
              className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
              type="button"
              onClick={() => getCityCoordinates()}
            >
              Get coordinates
            </button>
          </div>
          <div className="md:w-1/3 ml-2">
            {customCityCoords.lat !== 0 ? (
              <button
                className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                type="button"
                onClick={() => {
                  getWeather(
                    customCityCoords.lat,
                    customCityCoords.lng,
                    customCity,
                  );
                  localStorage.setItem(
                    'customCity',
                    JSON.stringify({
                      lat: customCityCoords.lat,
                      lng: customCityCoords.lng,
                      city: customCity,
                    }),
                  );
                }}
              >
                Set city
              </button>
            ) : (
              <button
                className="shadow bg-indigo-500 opacity-50 cursor-not-allowed text-white font-bold py-2 px-4 rounded w-full items-end"
                type="button"
              >
                Set city
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Settings;
