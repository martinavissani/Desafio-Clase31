module.exports = function(sequelize, dataTypes) 
{
let alias = "Pelicula"

let cols = 
{
id: 
{
type: dataTypes.BIGINT(50),
primaryKey: true,
allowNull: false,
autoIncrement: true
},
title: 
{
type: dataTypes.STRING(200),
allowNull: false
},
rating: 
{
type: dataTypes.DECIMAL(3, 1),
allowNull: false
},
awards: 
{
type: dataTypes.BIGINT(50),
allowNull: false
},
release_date: 
{
type: dataTypes.DATEONLY,
allowNull: false
},
length: 
{
type: dataTypes.BIGINT(100),
allowNull: false
}
}

let config = 
{
tableName: "movies",
timestamps: false
}

const Pelicula = sequelize.define(alias, cols, config)

return Pelicula
}