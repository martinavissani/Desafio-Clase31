// CONSTANTES

const express = require("express")
const router = express.Router()
const genresController = require("../controllers/genresController")

// RUTAS

router.get("/genres", genresController.list)
router.get("/genres/detail/:id", genresController.detail)

// EXPORTAR MODULO 

module.exports = router

