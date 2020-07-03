import AsyncStorage from '@react-native-community/async-storage';

const prefix = 'cache';

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
};
