import Usuario from '../models/usuario.model'

export const leerUsuarios = async (req, res) => {
    try {
        const usuario = await Usuario.find()
        res.send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
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

export const eliminarUsuario = async (req, res) => {
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

export const crearRol = async (req, res) => {
    try {
        let emailUsuario = req.params.email
        const usuario = await Usuario.findOne({ email: emailUsuario })
        let rol = req.body
        usuario.roles.push(rol)
        await Usuario.findOneAndUpdate({ email: emailUsuario }, usuario)
        const usuarioResponse = await Usuario.findOne({ email: emailUsuario })
        res.send(usuarioResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarRol = async (req, res) => {
    try {
        let emailUsuario = req.params.email
        let nombreRol = req.params.rol
        let cambiosRol = req.body
        const usuario = await Usuario.findOne({ email: emailUsuario })
        let rol = usuario.roles.find(x => x.nombre == nombreRol)
        rol.descripcion = cambiosRol.descripcion
        await Usuario.findOneAndUpdate({ email: emailUsuario }, usuario)
        const usuarioResponse = await Usuario.findOne({ email: emailUsuario })
        res.send(usuarioResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const eliminarRol = async (req, res) => {
    try {
        let emailUsuario = req.params.email
        let nombreRol = req.params.rol
        const usuario = await Usuario.findOne({ email: emailUsuario })
        usuarios.roles = usuario.roles.filter(x => x.nombre != nombreRol)
        await Usuario.findOneAndUpdate({ email: emailUsuario }, usuario)
        const usuarioResponse = await Usuario.findOne({ email: emailUsuario })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}