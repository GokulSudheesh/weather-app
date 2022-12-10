import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';

export const useGetUserLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [isError, setIsError] = useState<boolean>(false);
  const [address, setAddress] =
    useState<Location.LocationGeocodedAddress | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== Location.PermissionStatus.GRANTED) {
        Alert.alert(
          'Enable Location Access',
          'Permission to access location was denied',
          [{ text: 'OK' }]
        );
        setIsError(true);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setAddress(address[0]);
      setLocation(location);
      setIsError(false);
    })();
  }, []);

  return { location, address, isFetching: !location && !isError, isError };
};
