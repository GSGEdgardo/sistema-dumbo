import { Router } from 'express';
import { authRequired} from '../middleware/validateToken.js';
import {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient,
} from '../controllers/client.controller.js';
import { validateSchema } from "../middleware/validator.middleware.js";
import { registerSchema } from '../schemas/client.schema.js';

const router = Router();

// Obtener todos los clientes
router.get('/clients', authRequired, getClients);

// Obtener un cliente por ID
router.get('/clients/:id', authRequired, getClient);

// Crear un nuevo cliente
router.post('/clients', authRequired, validateSchema(registerSchema), createClient);

// Actualizar un cliente por ID
router.put('/clients/:id', authRequired, updateClient);

// Eliminar un cliente por ID
router.delete('/clients/:id', authRequired, deleteClient);

export default router;
