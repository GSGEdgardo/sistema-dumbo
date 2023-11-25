import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

/**
 * Autentica a un usuario verificando las credenciales.
 * @route POST /api/login
 * @param {string} username - Nombre de usuario del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Object} - Respuesta JSON con el token de acceso.
 * @throws {Object} - Respuesta JSON con mensaje de error en caso de fallo.
 */
export const login = async (req, res) => {
    // Obtiene el nombre de usuario y la contraseña del cuerpo de la solicitud.
    const { username, password } = req.body;

    try {
        // Busca un usuario en la base de datos con el nombre de usuario proporcionado.
        const userFound = await User.findOne({ username });

        // Si no se encuentra el usuario, devuelve un error.
        if (!userFound) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos.
        const isMatch = await bcrypt.compare(password, userFound.password);

        // Si las contraseñas no coinciden, devuelve un error.
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // Genera un token de acceso con la información del usuario y lo guarda en una cookie.
        const token = await createAccessToken({ id: userFound._id, numberId: userFound.numberId });
        res.cookie('token', token);

        // Devuelve la información del usuario y el token de acceso en formato JSON.
        res.json({
            id: userFound._id,
            numberId: userFound.numberId,
        });
    } catch (error) {
        // Si ocurre un error durante el proceso, devuelve un mensaje de error.
        res.status(500).json({ message: error.message });
    }
};

/**
 * Cierra la sesión de un usuario.
 * @route POST /api/logout
 * @returns {number} - Código de estado 200 en caso de éxito.
 */
export const logout = (req, res) => {
    // Borra la cookie que contiene el token de acceso, cerrando la sesión del usuario.
    res.cookie("token", "", {
        expires: new Date(0)
    });

    // Devuelve un código de estado 200 para indicar que la sesión se cerró con éxito.
    return res.sendStatus(200);
};
