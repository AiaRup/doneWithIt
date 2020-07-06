import { useState, useEffect } from 'react';
import { useFirebaseContext } from '../services/firebase';

export default useCollection = (collection) => {
  const [data, setData] = useState();
  const { firebase } = useFirebaseContext();

  const getCollection = () => {
    firebase
      .firestore()
      .collection(collection)
      .get()
      .then(function (querySnapshot) {
        const response = [];
        querySnapshot.forEach(function (doc) {
          response.push({ id: doc.id, ...doc.data() });
        });
        setData(response);
      })
      .catch(() => {
        console.log('error');
      });
  };

  useEffect(() => {
    getCollection();
  }, []);
  return { data };
};
