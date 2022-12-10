import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useGetUserLocation } from '@/hooks/useGetUserLocation';

const HomeScreen = () => {
  const { location, isFetching, isError } = useGetUserLocation();

  return (
    <SafeAreaView style={style.container}>
      {isError && <Text>Permission to access location was denied</Text>}
      {isFetching && <ActivityIndicator size={100} animating={isFetching} />}
      {location && <Text>{JSON.stringify(location)}</Text>}
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
