const {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = 'react-native-dotenv';

export default {
  apiKey: process.env.API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
