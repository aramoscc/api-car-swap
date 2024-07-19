
const mongoose = require('mongoose')
const { modelosSchema, marcasSchema, fichasSchema, planesSchema, menuSchema, preciosSchema, kilometrosSchema, usuariosSchema, coloresSchema, cambiosSchema, combustiblesSchema, etiquetasSchema, carroceriasSchema, anunciosSchema, favoritosSchema } = require('./schemas')

const Modelo = mongoose.model('Modelo' , modelosSchema)
const Marca = mongoose.model('Marca' , marcasSchema)
const Ficha = mongoose.model('Ficha' , fichasSchema)
const Plan = mongoose.model('Plan' , planesSchema)
const Menu = mongoose.model('Menu' , menuSchema)
const Precio = mongoose.model('Precio' , preciosSchema)
const Kilometraje = mongoose.model('Kilometraje' , kilometrosSchema)
const Usuario = mongoose.model('Usuario' , usuariosSchema)
const Color = mongoose.model('Color' , coloresSchema)
const Cambio = mongoose.model('Cambio' , cambiosSchema)
const Combustible = mongoose.model('Combustible' , combustiblesSchema)
const Etiqueta = mongoose.model('Etiqueta' , etiquetasSchema)
const Carroceria = mongoose.model('Carroceria' , carroceriasSchema)
const Anuncio = mongoose.model('Anuncio' , anunciosSchema)
const Favorito = mongoose.model('Favorito' , favoritosSchema)

module.exports = {
    Modelo,
    Marca,
    Ficha,
    Plan,
    Menu,
    Precio,
    Kilometraje,
    Usuario,
    Color, 
    Cambio, 
    Combustible,
    Etiqueta,
    Carroceria,
    Anuncio,
    Favorito
}