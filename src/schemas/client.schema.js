import { z } from 'zod';

/**
 * Esquema de validación para el registro de clientes.
 * @typedef {Object} RegisterSchema
 * @property {string} name - Nombre del cliente.
 * @property {string} lastName - Apellido del cliente.
 * @property {string} email - Correo electrónico del cliente (debe ser válido según la expresión regular).
 * @property {string} numberId - Número de identificación del cliente (RUT o DNI).
 */

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

/**
 * Esquema de validación para el registro de clientes.
 * @type {import('zod').zodObject<RegisterSchema>}
 */
export const registerSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    lastName: z.string({
        required_error: "Last name is required",
    }),
    email: z
        .string({
            required_error: "Email is required",
        })
        .refine((data) => emailRegex.test(data), {
            message: "Email is not valid",
        }),
    numberId: z.string({
        required_error: "RUT or DNI is required",
    }),
});
