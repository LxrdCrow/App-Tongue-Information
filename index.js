// initialize the server
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./API/post');
const userRoutes = require('./API/user');
const interactionRoutes = require('./API/interaction');
require('dontenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/interactions', interactionRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

