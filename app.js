//importa dependencia de la biblioteca express
import express, { json } from 'express'
//importa dependencia de la biblioteca morgan
import morgan from 'morgan'

import 'dotenv/config'

//crea la aplicacion 
const app = express()

//lee el body en formato json
app.use(json())
//imprime las acciones hacia cada endopoint en la terminal
app.use(morgan('dev'))

//define un puerto en que va a escuchar pedidos
const port = process.env.PORT

let usuarios = [
    {
        email: "pablo@mail.com",
        usuario: "pablo",
        contrasenia: "1234",
        roles: ["administrador", "vendedor"]
    },
    {
        email: "juan@mail.com",
        usuario: "juan",
        contrasenia: "2345",
        roles: ["administrador"]
    },
    {
        email: "jose@mail.com",
        usuario: "jose",
        contrasenia: "3456",
        roles: ["vendedor"]
    }
]

//endpoints
app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.get('/usuarios/:email', (req, res) => {
    let email = pedido.params.email
    //busco el usuario con el email
    let usuario = usuarios.find(x => x.email == email)
    res.send(usuario)
})

app.post('/usuarios', (req, res) => {
    usuarios.push(pedido.body)
    res.send(pedido.body)
})

app.put('/usuarios/:email', (req, res) => {
    let email = pedido.params.email
    //busco el usuario con el email
    let usuario = usuarios.find(x => x.email == email)
    //actualizo los campos del usuario
    usuario.usuario = pedido.body.usuario
    usuario.contrasenia = pedido.body.contrasenia
    res.send(usuario)
})

app.delete('/usuarios/:email', (req, res) => {
    let email = request.params.email
    //busco el usuario con el email
    let usuario = usuarios.find(x => x.email == email)
    //valido si un usuario existe con el email  
    if (usuario == null) {
        response.status(404).send("No se encuentra el usuario")
        return
    }

    let indice = usuarios.indexOf(usuario)
    usuarios.splice(indice, 1)
    res.send("Se elimino el usuario")
});

app.get('/usuarios/:email/roles', (req, res) => {
    let email = request.params.email
    //busco el usuario con el email
    let usuario = usuarios.find(x => x.email == email)
    //valido si un usuario existe con el email
    if (usuario == null) {
        res.status(404).send("No se encuentra el usuario")
        return
    }

    res.send(usuario.roles)
})

app.listen(port)