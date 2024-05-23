const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
connectDB().catch(error => {
  console.error('Failed to connect to the database:', error.message);
  process.exit(1);
});

// Use the product routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
