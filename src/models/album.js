'use strict';

module.exports = function(sequelize, DataTypes) {
  const Album = sequelize.define('Album', {
    album_name: DataTypes.STRING,
    album_views: DataTypes.INTEGER,
  }, {
    tableName: 'yeki_album',
    freezeTableName: true,
    timestamps: false,
    getterMethods   : {
      _discount: function()  { return Number(this.album_views).toFixed(1) }
    }
  });
  
  return Album
}