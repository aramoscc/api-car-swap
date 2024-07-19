const { Marca, Modelo, Ficha, Plan, Menu, Precio, Kilometraje, Usuario } = require("./models")

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
    iniciarSesion
}