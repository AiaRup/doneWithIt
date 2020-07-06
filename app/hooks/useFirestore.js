import { useState } from 'react';
import { fuego } from '@nandorojo/swr-firestore';

export default useFirestore = (func) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    func(fuego.db, ...args)
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
