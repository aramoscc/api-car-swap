
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const marcasSchema = new Schema(
    {
        marca : String,
        ficha : Boolean
    },
    {
        collection : "marcas",
        versionKey : false
    }
)

const modelosSchema = new Schema(
    {
        id_marca : String,
        modelo : String,
        ficha : Boolean
    },
    {
        collection : "modelos",
        versionKey : false
    }
)

const fichasSchema = new Schema(
    {
        id_modelo : String,
        version : String,
        modelo : String,
        marca : String,
        carroceria : String,
        anyo : String,
        combustible : String,
        distintivo_dgt : String,
        cambio : String,
        potencia : String,
        traccion : String,
        velocidad_max : String,
        par_max : String,
        precio : Number,
        ficha : {
            type: [Schema.Types.Mixed],
            default: []
        }
    },
    {
        collection : "fichas-tecnicas",
        versionKey : false
    }
)

const planesSchema = new Schema(
    {
        imagen : String,
        features : [String]
    },
    {
        collection : "planes-profesionales",
        versionKey : false
    }
)

const menuSchema = new Schema(
    {
        titulo : String,
        texto : String,
        icono : String,
        registrado : Boolean,
        no_registrado : Boolean
    },
    {
        collection : "menu",
        versionKey : false
    }
)

const preciosSchema = new Schema(
    {
        precio : String
    },
    {
        collection : "precios",
        versionKey : false
    }
)

const kilometrosSchema = new Schema(
    {
        kilometraje : String
    },
    {
        collection : "kilometros",
        versionKey : false
    }
)

const usuariosSchema = new Schema(
    {
        nombre : String,
        correo : String,
        password : String
    },
    {
        collection : "usuarios",
        versionKey : false
    }
)

// const busquedasSchema = new Schema(
//     {
//         id_usuario : String,
//         filtros : {
//             type : [Schema.Types.Mixed],
//             default : []
//         }
//     }
// )

module.exports = {
    modelosSchema,
    marcasSchema,
    fichasSchema,
    planesSchema,
    menuSchema,
    preciosSchema,
    kilometrosSchema,
    usuariosSchema
}