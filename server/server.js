const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// API endpoint to proxy requests to the Just Eat API
app.get('/restaurants/:postcode', async (req, res) => {
  const postcode = req.params.postcode;
  try {
    const response = await axios.get(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});