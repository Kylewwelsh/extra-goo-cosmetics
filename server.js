// code for dependencies
const express = require('express');
const path = require('path');
require('dotenv').config();
const index = require('./routes/index');

const app = express();
app.set('view engine', 'ejs');

//connection to public folder
app.use(express.static(path.join(__dirname, 'public')))

// routes, index.js
app.use('/', index)

// connection to 404 page in public file
app.use((req, res) => {
  res.status(404)
  res.sendFile(__dirname + '/public/404.html')
});

//port (also set in .env)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));