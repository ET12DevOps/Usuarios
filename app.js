//importa dependencia de la biblioteca express
const express = require('express')

//crea la aplicacion 
const app = express()

//lee el body en formato json
app.use(express.json())

//define un puerto en que va a escuchar pedidos
const port = 3000

app.get('/', (pedido, respuesta) => {
    respuesta.send('mensaje bienvenida')
})

app.post('/', (pedido, respuesta) => {
    console.log(pedido.body)
    respuesta.send(pedido.body)
})

app.listen(port)