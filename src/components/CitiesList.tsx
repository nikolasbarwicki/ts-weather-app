import React from 'react';

import beijing from '../assets/images/beijing.jpg';
import berlin from '../assets/images/berlin.jpg';
import london from '../assets/images/london.jpg';
import newyork from '../assets/images/newyork.jpg';
import tokyo from '../assets/images/tokyo.jpg';

const CitiesList = () => {
  return (
    <section className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Weather Forecast
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={london} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              12:31
            </div>
          </div>
          <span className="text-indigo-600 text-xl font-bold mt-4">London</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={berlin} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span className="text-gray-800 text-xl font-bold mt-4">Berlin</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={newyork} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span className="text-gray-800 text-xl font-bold mt-4">New York</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={tokyo} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span className="text-gray-800 text-xl font-bold mt-4">Tokyo</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-40 w-56 rounded-lg relative overflow-auto">
            <img src={beijing} alt="" className="h-full " />
            <div className="bg-white text-gray-800 font-bold py-2 px-4 right-0 bottom-0 absolute rounded-tl-lg">
              13:31
            </div>
          </div>
          <span className="text-gray-800 text-xl font-bold mt-4">Beijing</span>
        </div>
      </div>
    </section>
  );
};

export default CitiesList;
