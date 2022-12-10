import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Daily } from '@/interfaces/openWeatherResponse.interface';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getDayOfTheWeek } from '@/utils/date';
import { getRainProb, roundTemp } from '@/utils/weather';
import WeatherIcon from './WeatherIcon';

const DailyTemp = ({ data }: { data: Daily[] }) => {
  return (
    <View style={style.container}>
      {data.map((day, index) => (
        <View key={index} style={style.dayItem}>
          <Text style={style.highLightText}>
            {index === 0 ? 'Today' : getDayOfTheWeek(new Date(day.dt * 1000))}
          </Text>
          <View style={style.detailsWrapper}>
            <View style={style.rainDrop}>
              <MaterialCommunityIcons name="water" size={20} color="#000" />
              <Text>{getRainProb(day.rain)}</Text>
            </View>
            <WeatherIcon width={40} height={40} icon={day.weather[0].icon} />
            <Text style={style.highLightText}>{`${roundTemp(
              day.temp.max
            )} ${roundTemp(day.temp.min)}`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DailyTemp;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#b0b0b0',
    borderRadius: 16,
  },
  dayItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rainDrop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highLightText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
