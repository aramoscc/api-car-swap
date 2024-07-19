
const express = require('express')
const { getMarcas, getModelosPorMarca, getMarcasFicha, getModelosFicha, getFichasPorModelo, getNombreVersiones, getFichaPorId, getPlanes, getMenu, getPrecios, getKilometros, iniciarSesion, registrarse, getCambios, getColores, getCombustibles, getEtiquetas, getCarrocerias, getMisAnuncios, buscarAnuncios, postAnuncio, deleteMiAnuncio, deleteFavoritos, getFavoritos, deleteUsuario, putUsuario, getFicha, postFavoritos } = require('./controller')
const { get } = require('mongoose')
const router = express.Router()

router.route('/marcas')
    .get(getMarcas)

router.route('/cambios')
    .get(getCambios)

router.route('/colores')
    .get(getColores)

router.route('/combustibles')
    .get(getCombustibles)

router.route('/etiquetas')
    .get(getEtiquetas)

router.route('/carrocerias')
    .get(getCarrocerias)

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

router.route('/publicar')
    .post(postAnuncio)

router.route('/mis-anuncios/:id_usuario')
    .get(getMisAnuncios)

router.route('/anuncios')
    .post(buscarAnuncios)

router.route('/anuncio/delete/:id_anuncio')
    .delete(deleteMiAnuncio)

router.route('/favorito/delete/:id_favorito')
    .delete(deleteFavoritos)

router.route('/favoritos/:id_usuario')
    .get(getFavoritos)

router.route('/favoritos')
    .post(postFavoritos)

router.route('/usuario/delete/:id_usuario')
    .delete(deleteUsuario)

router.route('/usuario/update')
    .delete(putUsuario)

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