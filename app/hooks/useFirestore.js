import { useState } from 'react';
import { useCollection } from '@nandorojo/swr-firestore';

export default useFirestore = (collection, newDoc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: resData, add, error: resError } = useCollection(collection);

  const request = async () => {
    setLoading(true);
    if (newDoc) {
      add(newDoc);
    }
    setLoading(false);

    if (resError) return setError(true);

    setError(false);
    setData(resData);
  };
  return { data, error, loading, request };
};
