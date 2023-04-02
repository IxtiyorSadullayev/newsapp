const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { connectDB } = require('./helpers/db')

dotenv.config()

// App yaratish
const app = express()

// config
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// connect db

connectDB()

// routes

app.use('/user', require('./routes/user'))

// error routes
app.use(async(req, res, next) =>{
    try {
        const error = new Error("Kechirasiz! Bunday manzil afsuskiy mavjud emas. Hato kodi 404");
        next(error);
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
})

app.use(async (error, req, res, next) =>{
    try {
        const hato = error;
        await res.status(404).json(hato.message)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
})

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port}`))