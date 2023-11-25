import { z } from 'zod';

/**
 * Esquema de validación para la solicitud de inicio de sesión.
 * @typedef {Object} LoginSchema
 * @property {string} username - Nombre de usuario.
 * @property {string} password - Contraseña (mínimo 6 caracteres).
 */

/**
 * Esquema de validación para la solicitud de inicio de sesión.
 * @type {import('zod').zodObject<LoginSchema>}
 */
export const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
});
