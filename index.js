const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const articlesRoute = require('./routes/articles');

app.use(bodyParser.json());

app.use("/articles",articlesRoute);

module.exports = app