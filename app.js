import express from "express"
import cors from 'cors'
// coneccion a la bd 
import db from "./database/db.js"
// se importa el enrutador 
import blogRoutes from './routes/routes.js'

const app = express()

app.use( cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de la conexion es: ${error}`)
}

/* app.get('/', (req,res)=> {
    res.send("hola hermosa")
}) */

app.listen(8000, () => {
    console.log('server up running in http://localhost:8000/')
})