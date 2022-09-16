import { Router } from 'express'
import {
    leerUsuario, leerUsuarios, crearUsuario,
    actualizarUsuario, eliminarUsuario, leerRoles, crearRol, actualizarRol, eliminarRol
} from '../controllers/usuario.controllers'

const router = Router()

router.get('/usuarios', leerUsuarios)

router.get('/usuarios/:email', leerUsuario)

router.post('/usuarios', crearUsuario)

router.put('/usuarios/:email', actualizarUsuario)

router.delete('/usuarios/:email', eliminarUsuario)

router.get('/usuarios/:email/roles', leerRoles)

router.post('/usuarios/:email/roles', crearRol)

router.put('/usuarios/:email/roles/:rol', actualizarRol)

router.delete('/usuarios/:email/roles/:rol', eliminarRol)

export default router