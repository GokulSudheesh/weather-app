import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from './Header';
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
    <View style={style.container}>
      <Header data={data} address={address} />
    </View>
  );
};

export default Weather;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
