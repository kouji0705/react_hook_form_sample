import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

type SearchFormData = {
  query: string;
};

const SearchForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<SearchFormData>();
  const [results, setResults] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = queryString.parse(location.search);
    const queryParam = params.query as string;
    if (queryParam) {
      setValue('query', queryParam);
      setResults([`Result for ${queryParam} 1`, `Result for ${queryParam} 2`, `Result for ${queryParam} 3`]);
    }
  }, [location.search, setValue]);

  const onSubmit = (data: SearchFormData) => {
    const newQuery = queryString.stringify({ query: data.query });
    navigate(`?${newQuery}`);
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

      {results.length > 0 && (
        <Box mt={4}>
          <List>
            {results.map((result, index) => (
              <ListItem key={index} button>
                <ListItemText primary={result} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default SearchForm;
