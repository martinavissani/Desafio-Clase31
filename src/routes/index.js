// CONSTANTES

const express = require("express")
const router = express.Router()

// RUTAS

router.get("/", function(req, res, next) 
{
res.render("index", {titulo: "Digital Movies"})
})

// EXPORTAR MODULO

module.exports = router


