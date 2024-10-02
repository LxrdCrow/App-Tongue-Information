//API management for posts
const express = require('express');
const { body, validationResult } = require('express-validator');
const pool = require('../config/database');

const router = express.Router();

// POST /api/posts - Create new post
router.post (
  '/',
  [
    body('title').notEmpty().withMessage('The title is required'),
    bosy('date').notEmpty().isISO8601().withMessage('The date need to be valid')
  ],
  async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, date } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO posts (title, date) VALUES (?, ?)',
        [title, date]
      );
      res.json({ message: 'Post created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

//PUT /api/posts/:id - Update post
router.put('/:id', async (req, res) => {
  const { title, date } = req.body;
  const postId = req.params.id;

  if (!title || !date) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const result = await pool.query(
      'UPDATE posts SET title = ?, date = ? WHERE id = ?',
      [title, date, postId]
    );
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//DELETE /api/posts/:id - Deleted post
router.delete('/:id', async (req, res) => {
  const postId = req.params.id;

  try {
    const result = await pool.query('DELETE FROM posts WHERE id = ?', [postId]);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//GET /api/posts - Get all posts
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const [posts] = await pool.query(
      'SELECT * FROM posts LIMIT ? OFFSET ?',
      [limit, offset]
    );
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;