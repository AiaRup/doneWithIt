import { useState, useEffect } from 'react';
import { useFirebaseContext } from '../services/firebase';
import logger from '../utility/logger';

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
        logger.log('error');
      });
  };

  useEffect(() => {
    getCollection();
  }, []);
  return { data };
};
