const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Basic endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Sri Ganesh Integrated Logistics API' });
});

// Quote Request Endpoint
app.post('/api/quote', (req, res) => {
  const data = req.body;
  console.log('New Quote Request:', data);
  // Here we would typically save to database or send an email
  res.status(200).json({ success: true, message: 'Quote request received successfully!' });
});

// Contact Endpoint
app.post('/api/contact', (req, res) => {
  const data = req.body;
  console.log('New Contact Message:', data);
  // Here we would typically save to database or send an email
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
