require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const groupsRouter = require('./routes/groups');
const notesRouter = require('./routes/notes');

app.use('/api/groups', groupsRouter);
app.use('/api/notes', notesRouter);

const encodedPassword = encodeURIComponent('Siddiq@03');
const mongoDBConnectionString = process.env.DATABASE_URL.replace('Siddiq%4003', encodedPassword);

mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Database');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server started on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to Database:', err);
    process.exit(1);
  });

module.exports = app;
