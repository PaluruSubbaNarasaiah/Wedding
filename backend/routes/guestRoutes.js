const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');

router.post('/rsvp', async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json({ message: 'RSVP saved' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
