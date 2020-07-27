const endpoint = 'users';

const getUserById = (firebase, id) => {
  return firebase.firestore().collection(endpoint).where('uid', '==', id).get();
};

const addUser = (firebase, user) => {
  return firebase.firestore().collection(endpoint).add(user);
};

export default {
  addUser,
  getUserById,
};
