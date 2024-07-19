
const mongoose = require('mongoose')
const { modelosSchema, marcasSchema, fichasSchema, planesSchema, menuSchema, preciosSchema, kilometrosSchema, usuariosSchema } = require('./schemas')

const Modelo = mongoose.model('Modelo' , modelosSchema)
const Marca = mongoose.model('Marca' , marcasSchema)
const Ficha = mongoose.model('Ficha' , fichasSchema)
const Plan = mongoose.model('Plan' , planesSchema)
const Menu = mongoose.model('Menu' , menuSchema)
const Precio = mongoose.model('Precio' , preciosSchema)
const Kilometraje = mongoose.model('Kilometraje' , kilometrosSchema)
const Usuario = mongoose.model('Usuario' , usuariosSchema)

module.exports = {
    Modelo,
    Marca,
    Ficha,
    Plan,
    Menu,
    Precio,
    Kilometraje,
    Usuario
}