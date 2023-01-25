const express = require('express'); 
const articlesController =  require('../db/controllers/article.controller');

const router = express.Router();

router.get("/",articlesController.index);

module.exports = router;