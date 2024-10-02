// initialize the server
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Configuration rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Use the rate limiter for all requests
app.use(limiter);


const userRoutes = require('./API/user');
const postRoutes = require('./API/post');
const interactionRoutes = require('./API/interaction');

// Add the API routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/interactions', interactionRoutes);


app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});