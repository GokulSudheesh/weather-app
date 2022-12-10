import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetUserLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== Location.PermissionStatus.GRANTED) {
        setIsError(true);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setIsError(false);
    })();
  }, []);

  return { location, isFetching: !location && !isError, isError };
};
