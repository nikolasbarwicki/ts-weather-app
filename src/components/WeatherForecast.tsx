import React from 'react';
import moment from 'moment';
import Icon from './Icon';
import { Daily } from '../types';

interface Props {
  daily: Daily[];
}

const WeatherForecast: React.FC<Props> = ({ daily }) => {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">London</h1>
      <div className="flex justify-between flex-row">
        {daily.map((item: Daily) => (
          <div className="flex flex-col items-center bg-gray-200 rounded-lg py-8 px-10">
            <Icon weather={item.weather} />
            <span className="text-gray-800 text-lg font-bold">
              {`+${Math.floor(item.tempMin)} / +${Math.floor(item.tempMax)}`}
            </span>
            <span className="text-gray-600 font-semibold">
              {moment.unix(item.dt).format('DD ddd')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherForecast;
