// CONSTANTES

const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require("method-override")

const indexRouter = require("./routes/index")
const moviesRoutes = require("./routes/moviesRoutes")
const genresRoutes = require("./routes/genresRoutes")
const actorsRoutes = require("./routes/actorsRoutes")

// VISTAS 

app.set('views', path.resolve(__dirname, "./views"))
app.set("view engine", "ejs")

// IMAGENES

app.use(express.static(path.resolve(__dirname, "../public")))

// URL ENCODE

app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

// RUTAS

app.use("/", indexRouter)
app.use(moviesRoutes)
app.use(genresRoutes)
app.use(actorsRoutes)

// SERVIDOR

app.listen("3000", function() 
{
console.log("Servidor corriendo!")
})


