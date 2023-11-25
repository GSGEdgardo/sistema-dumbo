import { Router } from 'express';
import { authRequired } from '../middleware/validateToken.js';
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

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Obtener todos los clientes.
 *     description: Obtiene la lista de todos los clientes.
 *     tags:
 *       - Clientes
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida con éxito.
 *       401:
 *         description: No se proporcionó un token de autenticación.
 *       403:
 *         description: Token de autenticación inválido.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/clients', authRequired, getClients);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Obtener un cliente por ID.
 *     description: Obtiene los detalles de un cliente específico por su ID.
 *     tags:
 *       - Clientes
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente a obtener.
 *     responses:
 *       200:
 *         description: Detalles del cliente obtenidos con éxito.
 *       401:
 *         description: No se proporcionó un token de autenticación.
 *       403:
 *         description: Token de autenticación inválido.
 *       404:
 *         description: Cliente no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/clients/:id', authRequired, getClient);

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Crear un nuevo cliente.
 *     description: Crea un nuevo cliente con la información proporcionada.
 *     tags:
 *       - Clientes
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterSchema'
 *     responses:
 *       200:
 *         description: Cliente creado con éxito.
 *       401:
 *         description: No se proporcionó un token de autenticación.
 *       403:
 *         description: Token de autenticación inválido.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/clients', authRequired, validateSchema(registerSchema), createClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Actualizar un cliente por ID.
 *     description: Actualiza la información de un cliente específico por su ID.
 *     tags:
 *       - Clientes
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterSchema'
 *     responses:
 *       200:
 *         description: Cliente actualizado con éxito.
 *       401:
 *         description: No se proporcionó un token de autenticación.
 *       403:
 *         description: Token de autenticación inválido.
 *       404:
 *         description: Cliente no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.put('/clients/:id', authRequired, updateClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     summary: Eliminar un cliente por ID.
 *     description: Elimina un cliente específico por su ID.
 *     tags:
 *       - Clientes
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente a eliminar.
 *     responses:
 *       204:
 *         description: Cliente eliminado con éxito.
 *       401:
 *         description: No se proporcionó un token de autenticación.
 *       403:
 *         description: Token de autenticación inválido.
 *       404:
 *         description: Cliente no encontrado.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete('/clients/:id', authRequired, deleteClient);

export default router;
