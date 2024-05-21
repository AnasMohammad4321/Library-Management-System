// src/components/ListView.js

import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const ListView = ({ books }) => {
    return (
      <List>
        {books.map((book) => (
          <ListItem key={book._id}>
            <ListItemText primary={book.title} secondary={book.author} />
          </ListItem>
        ))}
      </List>
    );
};

export default ListView;