const express = require('express'); 
const app = express();
const articlesController =  require('../db/controllers/article.controller');
const router = express.Router();

router.get('/',articlesController.index);

app.use("/", router);

module.exports = router;