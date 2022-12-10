import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import {
  OpenWeatherAPIResponse,
  Current,
} from '@/interfaces/openWeatherResponse.interface';
import WeatherIcon from './WeatherIcon';
import { roundTemp, getRainProb } from '@/utils/weather';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { get12HrTime } from '@/utils/date';

const TempCard = ({ data }: { data: Current }) => {
  return (
    <View style={style.tempCard}>
      <Text>{get12HrTime(new Date(data.dt * 1000))}</Text>
      <WeatherIcon width={50} height={50} icon={data.weather[0].icon} />
      <Text style={style.tempText}>{roundTemp(data.temp)}</Text>
      <View style={style.rainDrop}>
        <MaterialCommunityIcons name="water" size={20} color="#000" />
        <Text>{getRainProb(data.rain?.['1h'])}</Text>
      </View>
    </View>
  );
};

const HourlyTemp = ({ data }: { data: OpenWeatherAPIResponse }) => {
  const renderItem = ({ item }: { item: Current }) => {
    return <TempCard data={item} />;
  };

  return (
    <FlatList
      style={style.list}
      data={data.hourly}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default HourlyTemp;

const style = StyleSheet.create({
  container: {},
  list: {
    marginTop: 75,
    paddingVertical: 20,
    backgroundColor: '#b0b0b0',
    borderRadius: 16,
  },
  tempCard: {
    alignItems: 'center',
    color: '#fff',
    marginHorizontal: 5,
  },
  tempText: {
    fontSize: 16,
  },
  rainDrop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
