export type WeatherTypes =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Clear'
  | 'Clouds';

export type CityList = 'London' | 'Berlin' | 'New York' | 'Tokyo' | 'Beijing';

export interface Current {
  dt: number;
  humidity: number;
  temp: number;
  windSpeed: number;
  precipitation: number;
  weather: WeatherTypes;
  city: CityList;
}

export interface Daily {
  dt: number;
  tempMax: number;
  tempMin: number;
  weather: WeatherTypes;
}

export interface WeatherData {
  current: Current;
  daily: Daily[];
}
