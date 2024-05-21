import React from 'react';
import AddBook from '../components/AddBook';
import { Box, Typography } from '@mui/material';

const AddBookPage = () => {
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
        Add New Book
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
          <AddBook />
      </Box>
    </Box>
  );
};

export default AddBookPage;
