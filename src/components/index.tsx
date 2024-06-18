import { useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";
import { SearchResult } from "./SearchResult";
import { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";

export const JsonPlaceHolder = () => {
  const query = useQueryParams();
  const { results, loading } = useFetchData(query);

  return (
    <div>
      <h1>JsonPlaceHolder</h1>
      <SearchForm />
      <SearchResult results={results} loading={loading} />
    </div>
  );
};

const useQueryParams = () => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const queryParam = params.query as string || '';

  return queryParam;
};

const useFetchData = (query: string) => {
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
