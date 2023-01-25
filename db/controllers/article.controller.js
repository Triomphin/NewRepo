function index(req,res){
    const articles = "Articles list";
    res.send(articles);
}

module.exports={
    index : index
}