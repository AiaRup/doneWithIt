import React, { createContext, useContext } from 'react';
import * as firebase from 'firebase';

import firebaseConfig from '../config/firebase';

const FirebaseContext = createContext({});
let firbaseRef = {};

if (!firebase.apps.length) {
  firbaseRef = firebase.initializeApp(firebaseConfig);
}

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firebase: firbaseRef }}>
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
