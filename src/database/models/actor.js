module.exports = function(sequelize, dataTypes) 
{
let alias = "Actor"

let cols = 
{
id: 
{
type: dataTypes.BIGINT(50),
primaryKey: true,
allowNull: false,
autoIncrement: true
},
first_name: 
{
type: dataTypes.STRING(200),
allowNull: false
},
last_name: 
{
type: dataTypes.STRING(200),
allowNull: false
},
rating: 
{
type: dataTypes.DECIMAL(3,1),
allowNull: false
}
}

let config = 
{
tableName: "actors",
timestamps: false
}

const Actor = sequelize.define(alias, cols, config)

return Actor
}