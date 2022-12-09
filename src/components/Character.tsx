import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

const Character = ({ name, imageUrl }: { name: string; imageUrl: string }) => (
  <View style={style.item}>
    <Image source={{ uri: imageUrl }} style={{ width: 400, height: 400 }} />
    <Text style={style.name}>{name}</Text>
  </View>
);

export default Character;

const style = StyleSheet.create({
  item: {
    alignItems: 'center',
    marginBottom: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
});
