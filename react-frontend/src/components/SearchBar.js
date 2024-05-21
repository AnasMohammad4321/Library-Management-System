// src/components/SearchBar.js

import React from 'react';
import { Box, TextField } from '@mui/material';
import e from 'cors';

const SearchBar = ({ onSearch }) => {
    return (
        <Box sx={{mb: 2}}>
            <TextField
                label="Search"
                varient="outlined"
                placeholder="Search Book..."
                onChange={(e) => onSearch(e.target.value)}
                />
        </Box>
    );
}

export default SearchBar;