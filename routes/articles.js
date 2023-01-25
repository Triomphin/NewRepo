const express = require('express'); 
const app = express();
const articlesController =  require('../controllers/article.controller');
const router = express.Router();

router.get('/',articlesController.save);
 
module.exports = router;