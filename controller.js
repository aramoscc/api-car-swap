const { Marca, Modelo, Ficha, Plan, Menu, Precio, Kilometraje, Usuario, Color, Etiqueta, Cambio, Combustible, Carroceria, Anuncio, Favorito } = require("./models")

const getMarcas = async (req, res, next) => {

    try {

        const marcas = await Marca.find()

        res.json(marcas)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getModelosPorMarca = async (req, res, next) => {

    const {id_marca} = req.params

    try {

        const modelos = await Modelo.find({id_marca})

        res.json(modelos)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getMarcasFicha = async (req, res, next) => {

    try {
        
        const marcas = await Marca.find({ficha : true})

        res.json(marcas)

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getModelosFicha = async (req, res, next) => {

    const {id_marca} = req.params

    try {

        const modelos = await Modelo.find({id_marca , ficha : true})

        res.json(modelos)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getFichasPorModelo = async (req, res, next) => {

    const {id_modelo} = req.params

    try {

        const fichas = await Ficha.find({id_modelo})

        res.json(fichas)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getNombreVersiones = async (req, res, next) => {

    try {

        const versiones = await Ficha.find({}, 'version')

        res.json(versiones)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getFichaPorId = async (req, res, next) => {

    const {id} = req.params

    try {

        const ficha = await Ficha.findById(id)

        res.json(ficha)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getPlanes = async (req, res, next) => {

    try {

        const planes = await Plan.find()

        res.json(planes)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getMenu = async (req, res, next) => {

    const {login} = req.params

    try {
        
        if(login === "true"){

            const menu = await Menu.find({registrado : true} , 'titulo texto icono')

            res.json(menu)

        }else if(login === "false"){

            const menu = await Menu.find({no_registrado : true} , 'titulo texto icono')

            res.json(menu)

        }else{
            next()
        }

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getPrecios = async (req, res, next) => {

    try {

        const precios = await Precio.find()

        res.json(precios)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getKilometros = async (req, res, next) => {

    try {
        
        const kilometros = await Kilometraje.find()

        res.json(kilometros)

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const registrarse = async (req, res, next) => {

    const {nombre, correo, password} = req.body

    try {

        const usuario = await Usuario.findOne({correo})

        if(usuario){

            res.json(null)

        }else{

            const nuevoUsuario = new Usuario({nombre, correo, password})

            const savedUser = await nuevoUsuario.save()

            const usuarioRegistrado = await Usuario.findOne({_id : savedUser._id})

            res.json(usuarioRegistrado)

        }

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const iniciarSesion = async (req, res, next) => {

    const {correo, password} = req.body

    try {
        
        const usuario = await Usuario.findOne({correo, password})

        res.json(usuario)

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const putUsuario = async (req, res, next) => {

    const {_id, nombre, correo, password} = req.body

    try {
        
        const usuario = await Usuario.findByIdAndUpdate(_id, {nombre, correo, password})

        res.json(usuario)

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const deleteUsuario = async (req, res, next) => {

    const {id_usuario} = req.params

    try {
        
        await Usuario.findByIdAndDelete(id_usuario)

        res.json(true)

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getColores = async (req, res, next) => {

    try {

        const colores = await Color.find()

        res.json(colores)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getEtiquetas = async (req, res, next) => {

    try {

        const etiquetas = await Etiqueta.find()

        res.json(etiquetas)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getCambios = async (req, res, next) => {

    try {

        const cambios = await Cambio.find()

        res.json(cambios)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getCombustibles = async (req, res, next) => {

    try {

        const combustibles = await Combustible.find()

        res.json(combustibles)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getCarrocerias = async (req, res, next) => {

    try {

        const carrocerias = await Carroceria.find()

        res.json(carrocerias)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const postAnuncio = async (req, res, next) => {

    const {...datos} = req.body

    console.log('hola')

    try {

        const nuevoAnuncio = new Anuncio(datos)

        await nuevoAnuncio.save()

        res.json('OK')

    } catch (error) {

        next({statusText : error.message})
        
    }

}

const postFavoritos = async (req, res, next) => {

    const {...datos} = req.body

    try {

        const nuevoFavorito = new Favorito(datos)

        await nuevoFavorito.save()

        res.json('OK')
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getMisAnuncios = async (req, res, next) => {

    const {id_usuario} = req.params

    try {

        const anuncios = await Anuncio.find({id_usuario})

        res.json(anuncios)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const buscarAnuncios = async (req, res, next) => {

    const {id_usuario, marca, modelo, color, etiqueta, combustible, cambio, carroceria, anio_matriculacion , kilometros, precio, matricula} =  req.body 

    const query = {
        ...(id_usuario && { id_usuario }),
        ...(marca && { marca }),
        ...(modelo && { modelo }),
        ...(color && { color }),
        ...(etiqueta && { etiqueta }),
        ...(combustible && { combustible }),
        ...(cambio && { cambio }),
        ...(carroceria && { carroceria }),
        ...(anio_matriculacion && { anio_matriculacion }),
        ...(kilometros && { kilometros }),
        ...(precio && { precio }),
        ...(matricula && { matricula })
    };
    
    try {

        const anuncios = await Anuncio.find({ marca: { $regex: marca, $options: 'i' } })

        res.json(anuncios)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const getFavoritos = async (req, res, next) => {

    const {id_usuario} = req.params

    try {

        const favoritos = await Favorito.find({id_usuario})

        res.json(favoritos)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const deleteFavoritos = async (req, res, next) => {

    const {id_favorito} = req.params

    try {

        await Favorito.findByIdAndDelete(id_favorito)

        res.json(true)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

const deleteMiAnuncio = async (req, res, next) => {

    const {id_anuncio} = req.params

    try {

        await Anuncio.findByIdAndDelete(id_anuncio)

        res.json(true)
        
    } catch (error) {

        next({statusText : error.message})
        
    }

}

module.exports = {
    getMarcas,
    getModelosPorMarca,
    getMarcasFicha,
    getModelosFicha,
    getFichasPorModelo,
    getNombreVersiones,
    getFichaPorId,
    getPlanes,
    getMenu,
    getPrecios,
    getKilometros,
    registrarse,
    iniciarSesion,
    getCambios, 
    getColores, 
    getCombustibles, 
    getEtiquetas,
    getCarrocerias,
    postAnuncio,
    getMisAnuncios,
    buscarAnuncios, 
    getFavoritos, 
    deleteFavoritos,
    deleteMiAnuncio,
    putUsuario,
    deleteUsuario,
    postFavoritos
}