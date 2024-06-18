import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

type SearchFormData = {
  query: string;
};

const SearchForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = queryString.parse(location.search);
  const defaultQuery = params.query as string || '';

  const { register, handleSubmit } = useForm<SearchFormData>({
    defaultValues: { query: defaultQuery }
  });


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
    </Box>
  );
};

export default SearchForm;
