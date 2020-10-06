import React from 'react';
import Icon from './Icon';
import { DailyForecast } from './types';

interface Props {
  data: {
    daily: DailyForecast[];
  };
}

const WeatherForecast: React.FC<Props> = ({ data }) => {
  const { daily } = data;

  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">London</h1>
      <div className="flex justify-between flex-row">
        {daily.map((item) => (
          <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
            <Icon weather={item.weather[0].main} />
            <span className="text-gray-800 text-lg font-bold">
              {`+${item.temp.min.toFixed(0)} / +${item.temp.max.toFixed(0)}`}
            </span>
            <span className="text-gray-600 font-semibold">11 Mon</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
