import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

/**
 * Crea un token de acceso utilizando el paquete jwt.
 * @param {Object} payload - Datos a incluir en el token (puede ser el ID del usuario, número de identificación, etc.).
 * @returns {Promise<string>} - Promesa que resuelve con el token de acceso generado.
 * @throws {Error} - Error en caso de que ocurra algún problema durante la generación del token.
 */
export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        // Utiliza el método sign de jwt para generar un token con los datos proporcionados.
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d", // El token expirará después de 1 día.
            },
            (err, token) => {
                // Si ocurre un error, rechaza la promesa con el error.
                if (err) reject(err);
                // Si la generación es exitosa, resuelve la promesa con el token.
                resolve(token);
            }
        );
    });
}
