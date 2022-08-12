import express from 'express'

const router = express.Router()

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
router.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

router.get('/usuarios/:email', (req, res) => {
    let email = req.params.email
    //busco el usuario con el email
    let usuario = usuarios.find(x => x.email == email)
    res.send(usuario)
})

router.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.send(req.body)
})

router.put('/usuarios/:email', (req, res) => {
    let email = req.params.email
    //busco el usuario con el email
    let usuario = usuarios.find(x => x.email == email)
    //actualizo los campos del usuario
    usuario.usuario = req.body.usuario
    usuario.contrasenia = req.body.contrasenia
    res.send(usuario)
})

router.delete('/usuarios/:email', (req, res) => {
    let email = req.params.email
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

router.get('/usuarios/:email/roles', (req, res) => {
    let email = req.params.email
    //busco el usuario con el email
    let usuario = usuarios.find(x => x.email == email)
    //valido si un usuario existe con el email
    if (usuario == null) {
        res.status(404).send("No se encuentra el usuario")
        return
    }

    res.send(usuario.roles)
})

export default router