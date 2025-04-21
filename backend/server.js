const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const guestRoutes = require('./routes/guestRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/wedding', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

app.use('/api/guests', guestRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
