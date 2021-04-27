const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const router = require('./app/router');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(router);
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });