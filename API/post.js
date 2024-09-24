//API management for posts
const express = require('express');
const router = express.Router();
const db = require('../config/database');

//create new post
router.post('/', async (req, res) => {
    const { title, date } = req.body;
    try {
        const [result] = await db.execute (
            'INSERT INTO posts (title, date) VALUES (?, ?)',
            [title, date]
        );
      res.status(201).json({ id: result.insertId, title, date });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create post' });
    }
});

// View all posts with interaction aggregates
router.get('/', async (req,res) => {
    try {
        const [post] = db.execute (
            `SELECT p.id, p.title, p.date, COUNT(i.id) AS interactions 
            FROM posts p
            LEFT JOIN interactions i ON p.id = i.post_id
            GROUP BY p.id`
        );
      res.json(posts);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve posts'});  
    }
});

module.exports = router;


