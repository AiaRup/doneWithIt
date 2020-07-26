import { useContext, useState } from 'react';
// import jwtDecode from 'jwt-decode';

import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

import { useFirebaseContext } from '../services/firebase';

export const firebaseAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useFirebaseContext();

  const logIn = (userInfo) => {
    console.log('firebase', firebase);

    return firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(
        (result) => {
          return { error: null, ok: true, data: result };
        },
        (error) => {
          return { error: error.message, ok: false, data: {} };
        }
      );
    // const user = jwtDecode(authToken);
    // setUser(user);
    // authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const signUp = (userInfo) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(...userInfo)
      .then(
        (result) => {
          console.log(result);
        },
        (error) => setError(error.message)
      );
  };

  return { user, logOut, logIn, signUp };
};
