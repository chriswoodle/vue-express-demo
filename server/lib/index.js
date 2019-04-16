const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// console logger
app.use(morgan(':method :url :status - :response-time ms'));

// Serve static generated vue files
app.use(express.static(path.resolve(__dirname, '../../web/dist')));

// Define your api here
app.get('/hello', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));