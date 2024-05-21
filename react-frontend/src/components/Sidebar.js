import React from 'react';
import { List, ListItem, ListItemText, Drawer, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: 240, 
          boxSizing: 'border-box',
          backgroundColor: '#3f51b5',
          color: '#ffffff',
        },
      }}
    >
      <div style={styles.header}>
        <h2>Library Menu</h2>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/" sx={styles.listItem}>
            <ListItemText primary="Home" sx={styles.listItemText} />
        </ListItem>
        <ListItem button component={Link} to="/add-book" sx={styles.listItem}>
          <ListItemText primary="Add a Book" sx={styles.listItemText} />
        </ListItem>
        <ListItem button component={Link} to="/view-books" sx={styles.listItem}>
          <ListItemText primary="View Books" sx={styles.listItemText} />
        </ListItem>
      </List>
    </Drawer>
  );
};

const styles = {
  header: {
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#303f9f',
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#1a237e',
    },
  },
  listItemText: {
    color: '#ffffff',
  },
};

export default Sidebar;
