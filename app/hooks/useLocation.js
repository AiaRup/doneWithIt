import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import logger from '../utility/logger';

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLoaction = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      logger.log(error);
    }
  };

  useEffect(() => {
    getLoaction();
  }, []);

  return location;
};
