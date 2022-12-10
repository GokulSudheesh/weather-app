import { View, Text } from 'react-native';
import React from 'react';
import Header from './Header';
import { OpenWeatherAPIResponse } from '@/interfaces/openWeatherResponse.interface';

const Weather = ({ data }: { data: OpenWeatherAPIResponse }) => {
  return <Header data={data} />;
};

export default Weather;
