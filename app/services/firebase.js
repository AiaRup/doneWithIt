import React, { createContext, useContext } from 'react';
import * as firebase from 'firebase';

import firebaseConfig from '../config/firebase';

const FirebaseContext = createContext({});
let firbaseRef = {};

const initialState = {
  user: {},
  isAuthenticated: false,
};

if (!firebase.apps.length) {
  firbaseRef = firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthChange(onAuthStateChange);
}

const onAuthStateChange = (userId) => {
  user = userId;
  isAuthenticated: !!userId;
};

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
