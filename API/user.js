//API management for users
const express = require('express');
const router = express.Router();
const db = require('../config/database');

//create new user
router.post('/', async (req, res) => {
    const { nickname, age, city } = req.body;
    try {
        const [result] = await db.execute (
            'INSERT INTO users (nickname, age, city) VALUES (?, ?, ?)',
            [nickname, age, city]
        );
      res.status(201).json({ id: result.insertId, nickname, age, city });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;