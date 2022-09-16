import Rol from '../models/rol.model'

export const leerRoles = async (req, res) => {
    try {
        const roles = await Rol.find()
        res.send(roles)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const leerRol = async (req, res) => {
    try {
        let nombreRol = req.params.nombre
        const rol = await Usuario.findOne({ email: nombreRol })
        res.send(rol)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearRol = async (req, res) => {
    try {
        const rol = req.body
        await Rol.create(rol)
        res.status(201).send(rol)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarRol = async (req, res) => {
    try {
        let nombreRol = req.params.nombre
        let rol = req.body
        await Rol.findOneAndUpdate({ email: nombreRol }, rol)
        const rolResponse = await Rol.findOne({ email: nombreRol })
        res.send(rolResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const eliminarRol = async (req, res) => {
    try {
        let nombreRol = req.params.nombre
        await Rol.findOneAndRemove({ email: nombreRol })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}