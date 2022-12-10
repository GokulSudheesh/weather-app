import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useGetUserLocation } from '@/hooks/useGetUserLocation';
import { useGetWeatherQuery } from '@/redux/services/openWeather';
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
          }
        : skipToken
    );
  const isFetching = isWeatherFetching || isLocationFetching;
  console.log(weatherData);

  return (
    <SafeAreaView style={style.container}>
      {isError && <Text>Permission to access location was denied</Text>}
      {isFetching && <ActivityIndicator size={100} animating={isFetching} />}
      {!isFetching && location && <Text>{JSON.stringify(location)}</Text>}
      {!isFetching && weatherData && <Text>{JSON.stringify(weatherData)}</Text>}
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
