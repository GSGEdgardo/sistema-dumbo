import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

/**
 * Middleware para validar la autenticación del usuario mediante un token.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {function} next - Función para pasar la solicitud al siguiente middleware.
 * @returns {void}
 */
export const authRequired = (req, res, next) => {
    // Obtiene el token del objeto de cookies de la solicitud.
    const { token } = req.cookies;

    // Si no hay token, responde con un estado no autorizado y un mensaje.
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    // Verifica la validez del token utilizando el secreto.
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        // Si hay un error en la verificación, responde con un estado de prohibido y un mensaje.
        if (err) return res.status(403).json({ message: "Invalid token" });

        // Agrega la información decodificada del usuario a la solicitud.
        req.user = decoded;

        // Pasa la solicitud al siguiente middleware.
        next();
    });
};
