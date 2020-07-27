import { useContext } from 'react';

import AuthContext from '../auth/context';
import users from './users';

import { useFirebaseContext } from '../services/firebase';

export const firebaseAuth = () => {
  const { user } = useContext(AuthContext);
  const { firebase } = useFirebaseContext();
  const { request } = useFirestore(users.addUser);

  const logIn = (userInfo) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(
        () => {
          return { error: null, ok: true };
        },
        (error) => {
          return { error: error.message, ok: false };
        }
      );
  };

  const logOut = () => {
    firebase.auth().signOut();
  };

  const signUp = (userInfo) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(
        async () => {
          const user = firebase.auth().currentUser;
          await user.updateProfile({
            displayName: userInfo.name,
          });

          const newUser = {
            email: userInfo.email,
            name: userInfo.name,
            uid: user.uid,
          };

          await request(newUser);
          return { error: null, ok: true };
        },
        (error) => {
          return { error: error.message, ok: false };
        }
      );
  };

  return { user, logOut, logIn, signUp };
};
