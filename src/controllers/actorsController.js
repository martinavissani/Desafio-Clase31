// CONSTANTES

const db = require("../database/models")
const sequelize = db.sequelize

// CONFIGURACION DEL CONTROLADOR DE ACTORES

const actorsController = 
{
list: function(req, res) 
{
db.Actor.findAll()
.then(function(actores) {res.render("actorsList", {actores})})
},
detail: function(req, res)
{
db.Actor.findByPk(req.params.id)
.then(function(actor) {res.render("actorsDetail", {actor})})
} 
}

// EXPORTAR EL MODULO 

module.exports = actorsController




