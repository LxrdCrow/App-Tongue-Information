// API management for interections
const express = require('express');
const { body, validationResult } = require('express-validator');
const pool = require('../config/database');

const router = express.Router();

// POST /api/interactions - Create new interaction
router.post(
    '/',
    [
        body('type').isIn(['like', 'comment']).withMessage('Type of interaction must be "like" or "comment"'),
        body('time').notEmpty().isISO8601().withMessage('The time need to be valid')
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { type, time } = req.body;
    
    try {
        const result = await pool.query(
            'INSERT INTO interactions (type, time) VALUES (?, ?)',
            [type, time]
        );
        res.json({ message: 'Interaction created successfully' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }
);

// PUT /api/interactions/:id - Update an interaction
router.put('/:id', async (req, res) => {
    const { type, time } = req.body;
    const interactionId = req.params.id;
    
    if (!type || !time) {
    return res.status(400).json({ message: 'Missing required fields' });
    }
    
    try {
    const result = await pool.query(
        'UPDATE interactions SET type = ?, time = ? WHERE id = ?',
        [type, time, interactionId]
    );
    res.json({ message: 'Interaction updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
// DELETE /api/interactions/:id - Delete an interaction
router.delete('/:id', async (req, res) => {
    const interactionId = req.params.id;
  
    try {
      const result = await pool.query('DELETE FROM interactions WHERE id = ?', [interactionId]);
      res.json({ message: 'Interaction deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
// GET /api/interactions - Get all interactions
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt (req.query.limit) || 10;
  const offset = (page - 1) * limit;
  
  try {
    const [rows] = await pool.query('SELECT * FROM users LIMIT ? OFFSET ?', [limit, offset]);
        const [count] = await pool.query('SELECT COUNT(*) as total FROM users');
        const total = count[0].total;

        res.json({
          data: rows,
          pagination: {
              total,
              page,
              limit,
              totalPages: Math.ceil(total / limit)
          }
      });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});
  
module.exports = router;
