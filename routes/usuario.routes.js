import express from 'express'
const router = express.Router()
import Usuario from '../models/usuario.model'

router.get('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.find()
        res.send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/usuarios/:email', async (req, res) => {
    try {
        let emailUsuario = req.params.email
        // //busco el usuario con el email
        const usuario = await Usuario.findOne({ email: emailUsuario })
        res.send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/usuarios', async (req, res) => {
    try {
        const usuario = req.body
        await Usuario.create(usuario)
        res.status(201).send(usuario)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/usuarios/:email', async (req, res) => {
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
})

router.delete('/usuarios/:email', async (req, res) => {
    try {
        let emailUsuario = req.params.email
        //busco el usuario con el email y lo elimino
        await Usuario.findOneAndRemove({ email: emailUsuario })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
});

router.get('/usuarios/:email/roles', async (req, res) => {
    try {
        let emailUsuario = req.params.email
        // //busco el usuario con el email
        const usuario = await Usuario.findOne({ email: emailUsuario })
        res.send(usuario.roles)
    } catch (err) {
        res.status(500).send(err)
    }
})

export default router