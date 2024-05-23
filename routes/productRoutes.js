const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// GET route to fetch a product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await productService.getProductById(parseInt(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching product: ' + error.message);
  }
});

// POST route to create a new product
router.post('/', async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send('Error creating product: ' + error.message);
  }
});

module.exports = router;
