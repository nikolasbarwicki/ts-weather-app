export type WeatherTypes =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Clear'
  | 'Clouds';

export interface DailyForecast {
  temp: {
    min: number;
    max: number;
  };
  weather: {
    id: number;
    main: WeatherTypes;
    description: string;
    icon: string;
  }[];
}
