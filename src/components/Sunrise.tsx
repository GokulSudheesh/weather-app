import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { OpenWeatherAPIResponse } from '@/interfaces/openWeatherResponse.interface';
import { get12HrTime } from '@/utils/date';

const Sunrise = ({ data }: { data: OpenWeatherAPIResponse }) => {
  return (
    <View style={style.container}>
      {data.current?.sunrise && (
        <View style={style.timeWrapper}>
          <Text style={style.title}>Sunrise</Text>
          <Text style={style.time}>
            {get12HrTime(new Date(data.current.sunrise * 1000), {
              showMinutes: true,
            })}
          </Text>
        </View>
      )}
      <LottieView
        autoPlay
        loop
        style={{
          width: 150,
          height: 150,
        }}
        source={require('@/assets/lotties/sunset-sunrise.json')}
      />
      {data.current?.sunset && (
        <View style={style.timeWrapper}>
          <Text style={style.title}>Sunset</Text>
          <Text style={style.time}>
            {get12HrTime(new Date(data.current.sunset * 1000), {
              showMinutes: true,
            })}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Sunrise;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#b0b0b0',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeWrapper: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
  },
});
