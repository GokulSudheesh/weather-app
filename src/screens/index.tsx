import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Weather from '@/components/Weather';
import { useGetUserLocation } from '@/hooks/useGetUserLocation';
import { Units, useGetWeatherQuery } from '@/redux/services/openWeather';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const HomeScreen = () => {
  const {
    location,
    address,
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
      {isFetching && (
        <ActivityIndicator
          style={style.spinner}
          size={100}
          color="#000"
          animating={isFetching}
        />
      )}
      {!isFetching && weatherData && (
        <Weather data={weatherData} address={address} />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  spinner: {
    height: '100%',
  },
});
