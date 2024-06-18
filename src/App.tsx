import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import SearchForm from './SearchForm';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Example with React Hook Form
        </Typography>
        <Routes>
          <Route path="/" element={<SearchForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
