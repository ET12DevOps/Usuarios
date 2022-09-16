//importa dependencia de la biblioteca express
import express, { json } from 'express'

//importa dependencia de la biblioteca morgan
import morgan from 'morgan'

//importa archivo .env - variables de entorno
import 'dotenv/config'

//importa los las rutas de usuario.routes.js y rol.routes.js
import usuarioRoutes from './routes/usuario.routes'
import rolRoutes from './routes/rol.routes'

//importa la configuracion de la base de datos
import database from './database'

//crea la aplicacion 
const app = express()

//define un puerto en que va a escuchar pedidos
const port = process.env.PORT

//lee el body en formato json
app.use(json())

//imprime las acciones hacia cada endopoint en la terminal
app.use(morgan('dev'))

//aplica el uso de rutas
app.use(usuarioRoutes)
app.use(rolRoutes)

app.listen(port, () => {
    console.log(`Escuchando request en ${port}`)
})