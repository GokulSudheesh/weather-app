export interface OpenWeatherAPIResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely[];
  hourly: Current[];
  daily: Daily[];
}

export interface Current {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  wind_gust?: number;
  pop?: number;
  rain?: Rain;
}

export interface Rain {
  '1h': number;
}

export interface Weather {
  id: number;
  main: Main;
  description: Description;
  icon: Icon;
}

export enum Description {
  BrokenClouds = 'broken clouds',
  ClearSky = 'clear sky',
  LightRain = 'light rain',
  Mist = 'mist',
  ModerateRain = 'moderate rain',
  OvercastClouds = 'overcast clouds',
}

export enum Icon {
  The11D = '11d',
  The11N = '11n',
  The09D = '09d',
  The09N = '09n',
  The10D = '10d',
  The10N = '10n',
  The13D = '13d',
  The13N = '13n',
  The50D = '50d',
  The50N = '50n',
  The01D = '01d',
  The01N = '01n',
  The02D = '02d',
  The02N = '02n',
  The03D = '03d',
  The03N = '03n',
  The04D = '04d',
  The04N = '04n',
}

export enum Main {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Mist = 'Mist',
  Rain = 'Rain',
}

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
}

export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Minutely {
  dt: number;
  precipitation: number;
}
