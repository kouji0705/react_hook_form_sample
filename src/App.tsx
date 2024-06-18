import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { JsonPlaceHolder } from './components'

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Example with React Hook Form
        </Typography>
        <Routes>
          <Route path="/" element={<JsonPlaceHolder />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
