
const express = require('express')
const { getMarcas, getModelosPorMarca, getMarcasFicha, getModelosFicha, getFichasPorModelo, getNombreVersiones, getFichaPorId, getPlanes, getMenu, getPrecios, getKilometros, iniciarSesion, registrarse } = require('./controller')
const router = express.Router()

router.route('/marcas')
    .get(getMarcas)

router.route('/modelos/:id_marca')
    .get(getModelosPorMarca)

router.route('/fichas-tecnicas/marcas')
    .get(getMarcasFicha)

router.route('/fichas-tecnicas/modelos/:id_marca')
    .get(getModelosFicha)

router.route('/fichas-tecnicas/versiones/:id_modelo')
    .get(getFichasPorModelo)

router.route('/versiones')
    .get(getNombreVersiones)

router.route('/ficha/:id')
    .get(getFichaPorId)

router.route('/planes')
    .get(getPlanes)

router.route('/menu/:login')
    .get(getMenu)

router.route('/precios')
    .get(getPrecios)

router.route('/kilometros')
    .get(getKilometros)

router.route('/login')
    .post(iniciarSesion)

router.route('/registro')
    .post(registrarse)

router.all('*' , (req, res, next) => {

    const err = new Error()
        err.status = 404
        err.statusText = 'No encuentro el endpoint'

    next(err)
})

router.use((err, req, res, next) => {

    let {status, statusText} = err

    status = status || 500
    statusText = statusText || 'Error interno en mi API'

    res.status(status).json({status , statusText})

})

module.exports = {
    router
}