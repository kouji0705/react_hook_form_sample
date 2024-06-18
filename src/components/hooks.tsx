import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";

export const useQueryParams = () => {
    const location = useLocation();
    const params = queryString.parse(location.search);
    const queryParam = params.query as string || '';
  
    return queryParam;
  };
  
 export const useFetchData = (query: string) => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: { q: query }
          });
          setResults(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      };
  
      if (query) {
        fetchData();
      } else {
        setResults([]);
      }
    }, [query]);
  
    return { results, loading };
  };
  