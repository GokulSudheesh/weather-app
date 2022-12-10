import React from 'react';
import { Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { WeatherIconLotties, getOpenWeatherIcon } from '@/utils/weather';
import { Icon } from '@/interfaces/openWeatherResponse.interface';

interface WeatherIconProps {
  width: number;
  height: number;
  icon: Icon;
  showLottie?: boolean;
}

const WeatherIcon = ({ width, height, icon, showLottie }: WeatherIconProps) => {
  return (
    <>
      {showLottie && WeatherIconLotties[icon] ? (
        <LottieView
          autoPlay
          loop
          style={{
            width,
            height,
          }}
          source={WeatherIconLotties[icon]}
        />
      ) : (
        <Image
          source={{
            uri: getOpenWeatherIcon(icon),
            width,
            height,
          }}
        />
      )}
    </>
  );
};

export default WeatherIcon;
