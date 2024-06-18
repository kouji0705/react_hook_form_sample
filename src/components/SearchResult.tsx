import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { Box, CircularProgress, List, ListItem, ListItemText } from '@mui/material';

export const SearchResult: React.FC = () => {
  const location = useLocation();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (query: string) => {
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

    const params = queryString.parse(location.search);
    const queryParam = params.query as string;

    if (queryParam) {
      fetchData(queryParam);
    } else {
      setResults([]);
    }
  }, [location.search]);

  return (
    <Box mt={4}>
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {results.map((result) => (
            <ListItem key={result.id}>
              <ListItemText primary={result.title} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
