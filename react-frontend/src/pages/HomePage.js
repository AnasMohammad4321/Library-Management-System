import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Library Management System
      </Typography>
      <Typography variant="body1">
        Use the sidebar to navigate through the application.
      </Typography>
    </Box>
  );
};

export default HomePage;
