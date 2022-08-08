//importa dependencia de la biblioteca express
import express, { Express, Request, Response } from 'express'

//crea la aplicacion 
const app: Express = express()

//lee el body en formato json
app.use(express.json())

//define un puerto en que va a escuchar pedidos
const port = process.env.PORT || 3000

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
app.get('/usuarios', (pedido: Request, respuesta: Response) => {
    respuesta.send(usuarios)
})

app.get('/usuarios/:id', (pedido: Request, respuesta: Response) => {
    let id = pedido.params.id
    //console.log(id)
    respuesta.send(usuarios.filter(x => x.email == id))
})

app.post('/usuarios', (pedido: Request, respuesta: Response) => {
    usuarios.push(pedido.body)
    respuesta.send(pedido.body)
})

app.put('/usuarios/:id', (pedido: Request, respuesta: Response) => {
    let id = pedido.params.id
    let usuario = usuarios.filter(x => x.email == id).at(0)
    usuario!.usuario = pedido.body.usuario
    usuario!.contrasenia = pedido.body.contrasenia
    respuesta.send(usuario)
})

//app.delete('/usuarios:/id', (req, res));
app.delete('/usuarios/:id', (request: Request, response: Response) => {
    let id = request.params.id
    let usuarioAEliminar = usuarios.filter(x => x.email == id).at(0)!
    if (usuarioAEliminar == null)
        response.status(404).send("No se encuentra el usuario")

    let indice = usuarios.indexOf(usuarioAEliminar)
    usuarios.splice(indice, 1)
    response.send("Se elimino el usuario")
});

app.get('/usuarios/:email/roles', (request: Request, response: Response) => {
    let email = request.params.email
    let usuario = usuarios.filter(x => x.email == email).at(0)

    if (usuario == null)
        response.status(404).send("No se encuentra el usuario")

    response.send(usuario!.roles)
})

app.listen(port)