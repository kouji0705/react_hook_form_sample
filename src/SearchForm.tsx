import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Box, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

type SearchFormData = {
  query: string;
};

const SearchForm: React.FC = () => {
  const { register, handleSubmit } = useForm<SearchFormData>();
  const [results, setResults] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: SearchFormData) => {
    setSearchTerm(data.query);
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        params: { q: data.query }
      });
      const titles = response.data.map((post: any) => post.title);
      setResults(titles);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Search"
          {...register('query')}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      ) : (
        results.length > 0 && (
          <Box mt={4}>
            <List>
              {results.map((result, index) => (
                <ListItem key={index} button onClick={() => setSearchTerm(result)}>
                  <ListItemText primary={result} />
                </ListItem>
              ))}
            </List>
          </Box>
        )
      )}
    </Box>
  );
};

export default SearchForm;
