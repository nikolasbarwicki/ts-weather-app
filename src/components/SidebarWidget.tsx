import React from 'react';
import moment from 'moment';
import Icon from './Icon';
import { Current } from '../types';

interface Props {
  current: Current;
}

const SidebarWidget: React.FC<Props> = ({ current }) => {
  return (
    <div className="bg-white rounded-lg  py-4 px-8">
      <div>
        <div className="flex mb-6">
          <div className="mr-2">
            <Icon weather={current.weather} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">Today</span>
            <span className="text-xl font-semibold">
              {moment.unix(current.dt).format('HH:mm')}
            </span>
            <span className="text font-semibold text-gray-600">
              {moment.unix(current.dt).format('ddd, DD MMMM')}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-semibold">
            {`+${Math.floor(current.temp)}`}
            &deg;C
          </span>
          <span className="text-2xl font-semibold">{current.city}</span>
          <div className="w-full my-2">
            <div>
              <div className="flex justify-between mt-3">
                <span className="font-semibold text-gray-600">Humidity:</span>
                <span className="font-semibold">{`${current.humidity}%`}</span>
              </div>
              <div className="h-1 relative max-w-xl rounded-full overflow-hidden mt-1">
                <div className="w-full h-full bg-gray-200 absolute" />
                <div
                  className="h-full bg-orange-400 absolute"
                  style={{ width: `${current.humidity}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-3">
                <span className="font-semibold text-gray-600">
                  Precipitation:
                </span>
                <span className="font-semibold">
                  {`${current.precipitation * 100}%`}
                </span>
              </div>
              <div className="h-1 relative max-w-xl rounded-full overflow-hidden mt-1">
                <div className="w-full h-full bg-gray-200 absolute" />
                <div
                  className="h-full bg-orange-400 absolute"
                  style={{ width: `${current.precipitation * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-3">
                <span className="font-semibold text-gray-600">Wind:</span>
                <span className="font-semibold">{`${current.windSpeed} km/h`}</span>
              </div>
              <div className="h-1 relative max-w-xl rounded-full overflow-hidden mt-1">
                <div className="w-full h-full bg-gray-200 absolute" />
                <div
                  className="h-full bg-orange-400 absolute"
                  style={{ width: `${(current.windSpeed / 30) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarWidget;
