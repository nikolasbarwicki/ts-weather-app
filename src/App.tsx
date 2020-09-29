import React from 'react';
import './styles/main.css';

import { WiSnow, WiDaySunnyOvercast, WiCloudy } from 'react-icons/wi';
import Chart from './Chart';

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="flex justify-between flex-col w-1/6 bg-indigo-600 p-8">
        <nav>
          <span className="font-semibold text-white text-2xl tracking-widest">
            METEOROLOG
          </span>
          <ul className="mt-16">
            <li className="text-white text-xl font-semibold py-2 my-4 flex">
              <svg
                className="h-8 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              Dashboard
            </li>
            <li className="text-indigo-200 text-xl font-semibold py-2 my-4 flex hover:text-white">
              <svg
                className="h-8 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Settings
            </li>
          </ul>
        </nav>
        <div className="bg-white rounded-lg  py-4 px-8">
          <div>
            <div className="flex mb-6">
              <WiSnow className="text-6xl text-indigo-600 mb-1 mr-2" />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">Today</span>
                <span className="text-xl font-semibold">11:44</span>
                <span className="text font-semibold text-gray-600">
                  Mon, 11 January
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">+4&deg;C</span>
              <span className="text-2xl font-semibold">New York</span>
              <span className="font-semibold  text-gray-600">
                United States
              </span>
              <div className="w-full my-2">
                <div>
                  <div className="flex justify-between mt-3">
                    <span className="font-semibold text-gray-600">
                      Humidity:
                    </span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <div className="h-1 relative max-w-xl rounded-full overflow-hidden mt-1">
                    <div className="w-full h-full bg-gray-200 absolute" />
                    <div
                      className="h-full bg-orange-400 absolute"
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mt-3">
                    <span className="font-semibold text-gray-600">
                      Precipitation:
                    </span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="h-1 relative max-w-xl rounded-full overflow-hidden mt-1">
                    <div className="w-full h-full bg-gray-200 absolute" />
                    <div
                      className="h-full bg-orange-400 absolute"
                      style={{ width: '25%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mt-3">
                    <span className="font-semibold text-gray-600">Wind:</span>
                    <span className="font-semibold">4.5 km/h</span>
                  </div>
                  <div className="h-1 relative max-w-xl rounded-full overflow-hidden mt-1">
                    <div className="w-full h-full bg-gray-200 absolute" />
                    <div
                      className="h-full bg-orange-400 absolute"
                      style={{ width: '15%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="w-5/6 p-10 flex flex-col">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Weather Forecast
          </h1>
          <div>obrazki miast</div>
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">London</h1>
          <div className="flex flex-row">
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiSnow className="text-6xl text-indigo-600 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiSnow className="text-6xl text-indigo-600 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiDaySunnyOvercast className="text-6xl text-orange-400 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiCloudy className="text-6xl text-indigo-600 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiDaySunnyOvercast className="text-6xl text-orange-400 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiSnow className="text-6xl text-indigo-600 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiSnow className="text-6xl text-indigo-600 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10 mr-12">
              <WiDaySunnyOvercast className="text-6xl text-orange-400 mb-1" />
              <span className="text-gray-800 text-xl font-bold">-5/+4</span>
              <span className="text-gray-600 font-semibold">11 Mon</span>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Weather graph
          </h1>
          <div className="bg-gray-200 rounded-lg p-6">
            <Chart />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
