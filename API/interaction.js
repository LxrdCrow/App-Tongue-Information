//API management for interections
const express = require('express');
const router = express.Router();
const db = require('../config/database');

//create new interaction
router.post('/', async (req, res) => {
    const { type, time, post_id } = req.body;
    try {
        const [result] = await db.execute (
            'INSERT INTO interactions (type, time, post_id) VALUES (?, ?, ?)',
            [type, time, post_id]
        );
      res.status(201).json({ id: result.insertId, type, time, post_id });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create interaction' });
    }
});

module.exports = router;