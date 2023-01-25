const express = require('express');
const app = express();

const articlesRoute = require('./routes/articles');

app.use("articles",articlesRoute);

module.exports = app