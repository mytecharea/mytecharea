const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'MyTechArea Blog API is running'
  });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });