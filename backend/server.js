const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/charity_manager')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


const campaignsRoutes = require('./routes/campaigns');
const donationsRoutes = require('./routes/donations');
const paymentsRoutes = require('./routes/payments');
const settingsRoutes = require('./routes/settings');
const usersRoutes = require('./routes/users');

app.use('/api/campaigns', campaignsRoutes);
app.use('/api/donations', donationsRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/users', usersRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
