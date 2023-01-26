module.exports = (sequelize, Sequelize) => {
    const Article= sequelize.define("article", {
      Nom: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Image: {
        type: Sequelize.STRING
      },
      Prix: {
        type: Sequelize.STRING
      },
      Stock_global: {
        type: Sequelize.STRING
      },
      Quantite: {
        type: Sequelize.INTEGER
      }
    });
  
    return Article;
  };
  