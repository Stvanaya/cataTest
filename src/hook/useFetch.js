import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (config = {}) => {
  const [result, setResult] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function request () {
      try {
        const response = await axios(config);
        setResult(response.data)
      } catch (err) {
        setError(err);
      };
    };

    request();
  }, []);

  return [result, error];
};

export default useFetch;