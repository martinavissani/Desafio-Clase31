// CONSTANTES

const db = require('../database/models')
const sequelize = db.sequelize

// CONFIGURACION DEL CONTROLADOR DE PELICULAS

const moviesController = 
{
list: function(req, res) 
{
db.Pelicula.findAll()
.then(function(peliculas) 
{
res.render("moviesList", {peliculas})
})
},
detail: function(req, res) 
{
db.Pelicula.findByPk(req.params.id)
.then(function(pelicula) 
{
res.render("moviesDetail.ejs", {pelicula})
})
},
new: function(req, res) 
{
db.Pelicula.findAll(
{
order: [["release_date", "DESC"]]
})
.then(function(peliculas)
{
res.render("newestMovies", {peliculas})
})
},
recomended: function(req, res)
{
db.Pelicula.findAll(
{
where: {rating: {[db.Sequelize.Op.gte]: 8}},
order: [["rating", "DESC"]], 
limit: 5
})
.then(function(peliculas) 
{
res.render("recommendedMovies", {peliculas})
})
}
}
    
// EXPORTAR EL MODULO 

module.exports = moviesController


