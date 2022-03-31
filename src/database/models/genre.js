module.exports = function(sequelize, dataTypes) 
{
let alias = "Genero"

let cols = 
{
id: 
{
type: dataTypes.BIGINT(50),
primaryKey: true,
allowNull: false,
autoIncrement: true
},
name: 
{
type: dataTypes.STRING(200),
allowNull: false
},
ranking: 
{
type: dataTypes.BIGINT(50),
allowNull: false
}
}

let config = 
{
tableName: "genres",
timestamps: false
}

const Genero = sequelize.define(alias, cols, config)
    
return Genero
}