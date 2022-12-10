import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import WeatherIcon from './WeatherIcon';
import { OpenWeatherAPIResponse } from '@/interfaces/openWeatherResponse.interface';
import { LocationGeocodedAddress } from 'expo-location';
import { roundTemp } from '@/utils/weather';
import { Entypo } from '@expo/vector-icons';

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
          {address && (
            <View style={style.locationWrapper}>
              <Text style={style.locationText}>{address.city}</Text>
              <Entypo name="location-pin" size={22} color="#000" />
            </View>
          )}
        </View>
        <WeatherIcon
          width={200}
          height={200}
          icon={data.current.weather[0].icon}
          showLottie
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
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 58,
    fontWeight: '400',
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontWeight: '600',
    fontSize: 22,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
