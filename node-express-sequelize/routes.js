const express = require('express');
const Profile = require('./models/profile');

const router = express.Router();

// Create a profile
router.post('/profiles', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    return res.status(201).json(profile);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
