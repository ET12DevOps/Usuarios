import { Router } from 'express'
import {
    leerUsuario, leerUsuarios, crearUsuario,
    actualizarUsuario, borrarUsuario, leerRoles
} from '../controllers/usuario.controllers'

const router = Router()

router.get('/usuarios', leerUsuarios)

router.get('/usuarios/:email', leerUsuario)

router.post('/usuarios', crearUsuario)

router.put('/usuarios/:email', actualizarUsuario)

router.delete('/usuarios/:email', borrarUsuario)

router.get('/usuarios/:email/roles', leerRoles)

export default router