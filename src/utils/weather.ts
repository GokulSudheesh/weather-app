export const WeatherIconLotties: Record<string, string> = {
  '11d': require('@/assets/lotties/thunderstorm.json'),
  '11n': require('@/assets/lotties/thunderstorm.json'),
  '09d': require('@/assets/lotties/light-rain.json'),
  '09n': require('@/assets/lotties/light-rain.json'),
  '10d': require('@/assets/lotties/heavy-rain.json'),
  '10n': require('@/assets/lotties/heavy-rain.json'),
  '13d': require('@/assets/lotties/heavy-snow.json'),
  '13n': require('@/assets/lotties/heavy-snow.json'),
  '50d': require('@/assets/lotties/sand-dust.json'),
  '50n': require('@/assets/lotties/sand-dust.json'),
  '01d': require('@/assets/lotties/sunny.json'),
  '01n': require('@/assets/lotties/clear-night.json'),
  '02d': require('@/assets/lotties/cloudy.json'),
  '02n': require('@/assets/lotties/cloudy-night.json'),
  '03d': require('@/assets/lotties/overcast.json'),
  '03n': require('@/assets/lotties/overcast.json'),
  '04d': require('@/assets/lotties/overcast.json'),
  '04n': require('@/assets/lotties/overcast.json'),
};

export const getOpenWeatherIcon = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const roundTemp = (temp: number): string => `${Math.round(temp)}°`;
