import { useContext } from 'react';
import jwtDecode from 'jwt-decode';

import AuthContext from './context';
import authStorage from './storage';

import { useFirebaseContext } from '../../services/firebase';

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useFirebaseContext();

  const logIn = (userInfo) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userInfo)
      .then(
        () => {},
        (error) => console.log('Error on login')
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
      .createUserWithEmailAndPassword(userInfo)
      .then(
        () => {},
        (error) => console.log('Error on sign up')
      );
  };

  return { user, logOut, logIn };
};
