// app.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const bookRoutes = require('./routes/bookRoutes'); // Ensure the path is correct

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use book routes
app.use('/', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
