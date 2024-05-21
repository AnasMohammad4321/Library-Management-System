// src/pages/BookListPage.js

import React from 'react';
import BookList from '../components/BookList';
import { Box, Typography } from '@mui/material';

const BookListPage = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Book List
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
        <BookList />
      </Box>
    </Box>
  );
};

export default BookListPage;
