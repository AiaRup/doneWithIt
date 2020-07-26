import React, { createContext, useContext } from 'react';
import * as firebase from 'firebase';

import firebaseConfig from '../config/firebase';

const FirebaseContext = createContext({});
let firebaseRef = {};

if (!firebase.apps.length) {
  firebaseRef = firebase.initializeApp(firebaseConfig);
  // firebase.auth().onAuthChange(onAuthStateChange);
}

// const onAuthStateChange = (userId) => {
//   user = userId;
//   console.log('userId', userId);
// };

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firebase: firebaseRef }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error('useFirbaseContext must be used within a RoomProvider');
  }

  return context;
};
