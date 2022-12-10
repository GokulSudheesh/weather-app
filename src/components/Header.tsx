import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import WeatherIcon from './WeatherIcon';
import { OpenWeatherAPIResponse } from '@/interfaces/openWeatherResponse.interface';
import { LocationGeocodedAddress } from 'expo-location';
import { roundTemp } from '@/utils/weather';

const Header = ({
  data,
  address,
}: {
  data: OpenWeatherAPIResponse;
  address: LocationGeocodedAddress | null;
}) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View>
          <Text style={style.title}>{roundTemp(data.current.temp)}</Text>
          {address && <Text style={style.location}>{address.city}</Text>}
        </View>
        <WeatherIcon
          width={200}
          height={200}
          icon={data.current.weather[0].icon}
        />
      </View>
      <Text style={style.text}>
        {`${roundTemp(data.daily[0].temp.max)} / ${roundTemp(
          data.daily[0].temp.min
        )} Feels like ${roundTemp(data.current.feels_like)}`}
      </Text>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  container: {
    // width: '100%',
    // paddingHorizontal: 40,
  },
  header: {
    // flex: 1,
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 200,
    // paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 58,
    fontWeight: '400',
  },
  location: {
    fontWeight: '600',
    fontSize: 22,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
