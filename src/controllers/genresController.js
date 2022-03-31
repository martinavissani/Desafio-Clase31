// CONSTANTES

const db = require('../database/models')
const sequelize = db.sequelize

// CONFIGURACION DEL CONTROLADOR DE GENEROS

const genresController = 
{
list: function(req, res) 
{
db.Genero.findAll()
.then(function(generos) {res.render("genresList", {generos})})
},
detail: function(req, res)
{
db.Genero.findByPk(req.params.id)
.then(function(genero) {res.render("genresDetail", {genero})})
} 
}

// EXPORTAR EL MODULO 

module.exports = genresController

