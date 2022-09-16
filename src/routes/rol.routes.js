import { Router } from 'express'
import {
    leerRoles, leerRol, crearRol,
    actualizarRol, eliminarRol
} from '../controllers/rol.controllers'

const router = Router()

router.get('/roles', leerRoles)

router.get('/roles/:nombre', leerRol)

router.post('/roles', crearRol)

router.put('/roles/:nombre', actualizarRol)

router.delete('/roles/:nombre', eliminarRol)

export default router