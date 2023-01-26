const db = require("../models");
const Article = db.articles;
const Op = db.Sequelize.Op;

 const create = (req, res) => {
    
    const article = {
      Nom: req.body.nom,
      Description: req.body.description,
      Image: req.body.image_url,
      Prix: req.body.prix,
      Stock:req.body.stock_global,
      Qantite:req.body.quantite
    };
  
    // Save Tutorial in the database
        
    Article.create(article)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "error"
        });
      });
  };
module.exports={create};