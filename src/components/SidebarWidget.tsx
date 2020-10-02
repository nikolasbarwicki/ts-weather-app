import React from 'react';

import { WiSnow } from 'react-icons/wi';

const SidebarWidget = () => {
  return (
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
          <span className="font-semibold  text-gray-600">United States</span>
          <div className="w-full my-2">
            <div>
              <div className="flex justify-between mt-3">
                <span className="font-semibold text-gray-600">Humidity:</span>
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
  );
};

export default SidebarWidget;
