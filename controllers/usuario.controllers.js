import Usuario from '../models/usuario.model'

var usuarios = [
    {
        email: 'mail@mail.com',
        usuario: 'mail',
        contraseña: '1234'
    }
]

export const leerUsuarios = async (req, res) => {
    res.send(usuarios)
    // try {
    //     const usuario = await Usuario.find()
    //     res.send(usuario)
    // } catch (err) {
    //     res.status(500).send(err)
    // }
}

export const leerUsuario = async (req, res) => {
    try {
        let emailUsuario = req.params.email
        // //busco el usuario con el email
        const usuario = await Usuario.findOne({ email: emailUsuario })
        res.send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearUsuario = async (req, res) => {
    try {
        const usuario = req.body
        await Usuario.create(usuario)
        res.status(201).send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarUsuario = async (req, res) => {
    try {
        let emailUsuario = req.params.email
        let usuario = req.body
        //busco y actualizo el usuario
        await Usuario.findOneAndUpdate({ email: emailUsuario }, usuario)
        //busco el usuario modificado por el email
        const usuarioResponse = await Usuario.findOne({ email: emailUsuario })
        res.send(usuarioResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const borrarUsuario = async (req, res) => {
    try {
        let emailUsuario = req.params.email
        //busco el usuario con el email y lo elimino
        await Usuario.findOneAndRemove({ email: emailUsuario })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
};

export const leerRoles = async (req, res) => {
    try {
        let emailUsuario = req.params.email
        // //busco el usuario con el email
        const usuario = await Usuario.findOne({ email: emailUsuario })
        res.send(usuario.roles)
    } catch (err) {
        res.status(500).send(err)
    }
}