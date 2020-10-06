import React from 'react';
import Chart from './Chart';
import { Daily } from './types';

interface Props {
  daily: Daily[];
}

const WeatherGraph: React.FC<Props> = ({ daily }) => {
  const chartData: { day: string; temp: number }[] = [];

  daily.forEach((el: Daily) =>
    chartData.push({ day: '12 mon', temp: Math.floor(el.tempMax) }),
  );

  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Weather graph</h1>
      <div className="bg-gray-200 rounded-lg p-6">
        <div className="flex justify-between  mb-6">
          <div className="grid items-center grid-cols-4 divide-x divide-gray-400">
            <div className="text-center w-20 text-gray-600 font-semibold">
              Day
            </div>
            <div className="text-center w-20 text-indigo-600 font-semibold">
              Week
            </div>
            <div className="text-center w-20 text-gray-600 font-semibold">
              10 Days
            </div>
            <div className="text-center w-20 text-gray-600 font-semibold">
              15 Days
            </div>
          </div>
          <div className="inline-block relative w-48">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-600 font-semibold">
              <option>Temperature (&deg;C)</option>
              <option>Temperature (&deg;F)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <Chart data={chartData} />
      </div>
    </section>
  );
};

export default WeatherGraph;
