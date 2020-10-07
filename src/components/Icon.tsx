import React from 'react';
import {
  WiThunderstorm,
  WiDaySleet,
  WiRain,
  WiSnow,
  WiDaySunny,
  WiCloudy,
} from 'react-icons/wi';
import { WeatherTypes } from '../types';

interface Props {
  weather: WeatherTypes;
}

const Icon: React.FC<Props> = ({ weather }) => {
  function getIcon(iconType: WeatherTypes) {
    switch (iconType) {
      case 'Thunderstorm':
        return <WiThunderstorm className="text-6xl text-indigo-600 mb-1" />;
      case 'Drizzle':
        return <WiDaySleet className="text-6xl text-indigo-600 mb-1" />;
      case 'Rain':
        return <WiRain className="text-6xl text-indigo-600 mb-1" />;
      case 'Snow':
        return <WiSnow className="text-6xl text-indigo-600 mb-1" />;
      case 'Clear':
        return <WiDaySunny className="text-6xl text-yellow-500 mb-1" />;
      case 'Clouds':
        return <WiCloudy className="text-6xl text-indigo-600 mb-1" />;
      default:
        break;
    }
    return null;
  }

  return <div>{getIcon(weather)}</div>;
};

export default Icon;
