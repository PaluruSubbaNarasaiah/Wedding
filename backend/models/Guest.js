const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  attending: Boolean
});

module.exports = mongoose.model('Guest', guestSchema);
