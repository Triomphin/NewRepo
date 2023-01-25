'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    Id: DataTypes.INTEGER,
    Nom: DataTypes.STRING,
    Description: DataTypes.STRING,
    Image: DataTypes.STRING,
    Prix: DataTypes.STRING,
    Stock_global: DataTypes.STRING,
    Quantite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};