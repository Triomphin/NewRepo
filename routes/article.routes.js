module.exports = app => {
    const articles = require("../controllers/article.controller");
  
    var router = require("express").Router();
  
    // CCreer un nouveau article
    router.post("/", articles.create);
  
   /* // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);*/
  
    app.use('/articles', router);
  };
  