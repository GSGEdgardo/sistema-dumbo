import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller.js';
import { validateSchema } from "../middleware/validator.middleware.js";
import { loginSchema } from "../schemas/auth.schema.js";
import { registerSchema } from '../schemas/client.schema.js';

const router = Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Iniciar sesión de usuario.
 *     description: Permite a un usuario iniciar sesión proporcionando credenciales válidas.
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginSchema'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso. Devuelve el token de acceso.
 *       400:
 *         description: Credenciales inválidas o faltantes.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/login', validateSchema(loginSchema), login);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     summary: Cerrar sesión de usuario.
 *     description: Cierra la sesión del usuario actual, eliminando la cookie del token.
 *     tags:
 *       - Autenticación
 *     responses:
 *       200:
 *         description: Sesión cerrada con éxito.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/logout", logout);

export default router;
