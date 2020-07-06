import { useState } from 'react';
import { useFirebaseContext } from '../services/firebase';

export default useFirestore = (func) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { firebase } = useFirebaseContext();

  const request = async (...args) => {
    setLoading(true);
    func(firebase, ...args)
      .then(function (querySnapshot) {
        const response = [];
        querySnapshot.forEach(function (doc) {
          response.push({ id: doc.id, ...doc.data() });
        });

        setData(response);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });

    setLoading(false);
  };
  return { data, error, loading, request };
};
