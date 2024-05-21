// src/components/BookList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import ListView from './ListView';
import GridView from './GridView';
import SearchBar from './SearchBar';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [view, setView] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const titleWords = book.title.toLowerCase().split(" ");
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return titleWords.some(word => word.startsWith(lowercaseSearchTerm));
  });
  

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <SearchBar onSearch={setSearchTerm} />
        <Box>
          <Button variant="contained" onClick={() => setView('list')}>
            List View
          </Button>
          <Button variant="contained" onClick={() => setView('grid')} sx={{ ml: 2 }}>
            Grid View
          </Button>
        </Box>
      </Box>
      {view === 'list' ? <ListView books={filteredBooks} /> : <GridView books={filteredBooks} />}
    </Box>
  );
};

export default BookList;
