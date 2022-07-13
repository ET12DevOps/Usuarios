//importa dependencia de la biblioteca express
const express = require('express')

//crea la aplicacion 
const app = express()

//lee el body en formato json
app.use(express.json())

//define un puerto en que va a escuchar pedidos
const port = 3000

let usuarios = [
    { email: "pablo@mail.com", "usuario": "pablo", contrasenia: "1234" },
    { email: "juan@mail.com", "usuario": "juan", contrasenia: "2345" },
    { email: "jose@mail.com", "usuario": "jose", contrasenia: "3456" }]

//endpoints
app.get('/usuarios', (pedido, respuesta) => {
    respuesta.send(usuarios)
})

app.get('/usuarios/:id', (pedido, respuesta) => {
    let id = pedido.params.id
    //console.log(id)
    respuesta.send(usuarios.filter(x => x.email == id))
})

app.post('/usuarios', (pedido, respuesta) => {
    usuarios.push(pedido.body)
    respuesta.send(pedido.body)
})

app.put('/usuarios/:id', (pedido, respuesta) => {
    let id = pedido.params.id
    let usuario = usuarios.filter(x => x.email == id).at(0)
    usuario.usuario = pedido.body.usuario
    usuario.contrasenia = pedido.body.contrasenia
    respuesta.send(usuario)
})

app.listen(port)