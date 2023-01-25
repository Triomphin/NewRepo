const models = require('../models');

function save(req,res){
    const article ={
        nom : req.body.title,
        description : req.body.description,
        image : req.body.image_url,
        prix : req.body.prix,
        stock_global : req.body.stock_global, 
        quantite : req.body.stock
    }
    models.Article.create(post).then(result=>{
        res.status(201).json({
            message: "Article enregistré",
            post:result
        });
    }).catch(error =>{
        res.status(500).json({
            message: "erreur",
            error : error
        });
    } )
}


module.exports={
    save : save
}