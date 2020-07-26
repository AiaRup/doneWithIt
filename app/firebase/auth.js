import { useContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

import { useFirebaseContext } from '../services/firebase';

export const firebaseAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useFirebaseContext();

  const logIn = (userInfo) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(
        async (result) => {
          // const authToken = await result.getToken();
          const user1 = firebase.auth().currentUser;
          console.log('user1', user1.getToken());

          const user = jwtDecode(authToken);
          setUser(user);
          authStorage.storeToken(authToken);
          return { error: null, ok: true, data: result };
        },
        (error) => {
          return { error: error.message, ok: false, data: {} };
        }
      );
  };

  const logOut = () => {
    firebase.auth().signOut();
    setUser(null);
    authStorage.removeToken();
  };

  const signUp = (userInfo) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(
        (result) => {
          console.log('register', result);
          return { error: null, ok: true, data: result };
        },
        (error) => {
          console.log('register error', result);
          return { error: error.message, ok: false, data: {} };
        }
      );
  };

  return { user, logOut, logIn, signUp };
};
