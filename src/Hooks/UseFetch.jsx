import axios from 'axios';
import { useEffect, useState } from 'react';

const UseFetch = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(endpoint);
      setData(response.data.results);
      
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]); 

  return { data, loading };
};

export default UseFetch;
