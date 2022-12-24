import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch(url).then((data) => data.json());
        setData(data);
        setLoading(false);
      } catch {
        setError(err.toString());
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [loading, error, data];
};
