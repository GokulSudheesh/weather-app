import { Icon } from '@/interfaces/openWeatherResponse.interface';

export const WeatherIconLotties: Record<Icon, string> = {
  [Icon.The11D]: require('@/assets/lotties/thunderstorm.json'),
  [Icon.The11N]: require('@/assets/lotties/thunderstorm.json'),
  [Icon.The09D]: require('@/assets/lotties/light-rain.json'),
  [Icon.The09N]: require('@/assets/lotties/light-rain.json'),
  [Icon.The10D]: require('@/assets/lotties/heavy-rain.json'),
  [Icon.The10N]: require('@/assets/lotties/heavy-rain.json'),
  [Icon.The13D]: require('@/assets/lotties/heavy-snow.json'),
  [Icon.The13N]: require('@/assets/lotties/heavy-snow.json'),
  [Icon.The50D]: require('@/assets/lotties/sand-dust.json'),
  [Icon.The50N]: require('@/assets/lotties/sand-dust.json'),
  [Icon.The01D]: require('@/assets/lotties/sunny.json'),
  [Icon.The01N]: require('@/assets/lotties/clear-night.json'),
  [Icon.The02D]: require('@/assets/lotties/cloudy.json'),
  [Icon.The02N]: require('@/assets/lotties/cloudy-night.json'),
  [Icon.The03D]: require('@/assets/lotties/overcast.json'),
  [Icon.The03N]: require('@/assets/lotties/overcast.json'),
  [Icon.The04D]: require('@/assets/lotties/overcast.json'),
  [Icon.The04N]: require('@/assets/lotties/overcast.json'),
};

export const getOpenWeatherIcon = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const roundTemp = (temp: number): string => `${Math.round(temp)}°`;
