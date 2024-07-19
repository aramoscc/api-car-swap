console.clear()
console.log('JS')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { router } = require('./router')
const PORT = process.env.PORT || 3000
const MONGODDBB = process.env.MONGODDBB || 'mongodb://127.0.0.1:27017/car-swap'

const conectar = async () => await mongoose.connect('mongodb+srv://admin:admin@cluster0.pfirhf7.mongodb.net/car-swap')
                .then(() => console.log('MONGO'))
                .catch(err => console.log(err))

conectar()

const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(router)

app.listen(PORT, console.log('API'))