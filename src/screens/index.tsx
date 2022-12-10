import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Weather from '@/components/Header';
import { useGetUserLocation } from '@/hooks/useGetUserLocation';
import { Units, useGetWeatherQuery } from '@/redux/services/openWeather';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const HomeScreen = () => {
  const {
    location,
    isFetching: isLocationFetching,
    isError,
  } = useGetUserLocation();
  const { data: weatherData, isFetching: isWeatherFetching } =
    useGetWeatherQuery(
      location
        ? {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            units: Units.metric,
          }
        : skipToken
    );
  const isFetching = isWeatherFetching || isLocationFetching;

  return (
    <SafeAreaView style={style.container}>
      {isError && <Text>Permission to access location was denied</Text>}
      {isFetching && <ActivityIndicator size={100} animating={isFetching} />}
      {!isFetching && weatherData && <Weather data={weatherData} />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
