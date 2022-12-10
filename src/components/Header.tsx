import { View, Text } from 'react-native';
import React from 'react';
import { OpenWeatherAPIResponse } from '@/interfaces/openWeatherResponse.interface';

const Header = ({ data }: { data: OpenWeatherAPIResponse }) => {
  return (
    <View>
      <Text>{data.current.temp}</Text>
    </View>
  );
};

export default Header;
