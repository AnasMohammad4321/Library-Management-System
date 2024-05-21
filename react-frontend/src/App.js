import logo from './logo.svg';
import './App.css';
// src/App.js

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookListPage from './pages/BookListPage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* <Navbar /> */}
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="/view-books" element={<BookListPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

