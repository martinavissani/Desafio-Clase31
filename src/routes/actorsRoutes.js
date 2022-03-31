// CONSTANTES

const express = require("express")
const router = express.Router()
const actorsController = require("../controllers/actorsController")

// RUTAS

router.get("/actors", actorsController.list)
router.get("/actors/detail/:id", actorsController.detail)

// EXPORTAR MODULO 

module.exports = router    
