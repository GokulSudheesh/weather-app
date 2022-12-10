import { View, ScrollView, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from './Header';
import HourlyTemp from './HourlyTemp';
import DailyTemp from './DailyTemp';
import { OpenWeatherAPIResponse } from '@/interfaces/openWeatherResponse.interface';
import { LocationGeocodedAddress } from 'expo-location';

const Weather = ({
  data,
  address,
}: {
  data: OpenWeatherAPIResponse;
  address: LocationGeocodedAddress | null;
}) => {
  return (
    <ScrollView style={style.container}>
      <Header data={data} address={address} />
      <HourlyTemp data={data.hourly} />
      <DailyTemp data={data.daily} />
    </ScrollView>
  );
};

export default Weather;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
