import { Box, CircularProgress, List, ListItem, ListItemText } from '@mui/material';

type SearchResultProps = {
    results: any[];
    loading: boolean;
};

export const SearchResult = ({ results,loading}:SearchResultProps) => {
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
