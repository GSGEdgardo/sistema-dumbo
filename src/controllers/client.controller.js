import Client from "../models/client.models.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

/**
 * Obtiene la lista de todos los clientes.
 * @route GET /api/clients
 * @returns {Array} - Lista de clientes en formato JSON.
 * @throws {Object} - Respuesta JSON con mensaje de error en caso de fallo.
 */
export const getClients = async (req, res) => {
    try {
        // Busca todos los clientes en la base de datos.
        const clients = await Client.find();

        // Devuelve la lista de clientes en formato JSON.
        res.json(clients);
    } catch (error) {
        // Si ocurre un error durante el proceso, devuelve un mensaje de error.
        res.status(500).json({ message: error.message });
    }
};

/**
 * Crea un nuevo cliente.
 * @route POST /api/clients
 * @param {string} name - Nombre del cliente.
 * @param {string} lastName - Apellido del cliente.
 * @param {string} numberId - Número de identificación del cliente (RUT/DNI).
 * @param {string} email - Correo electrónico del cliente.
 * @returns {Object} - Respuesta JSON con la información del cliente creado.
 * @throws {Object} - Respuesta JSON con mensaje de error en caso de fallo.
 */
export const createClient = async (req, res) => {
    // Obtiene los datos del cliente del cuerpo de la solicitud.
    const { name, lastName, numberId, email } = req.body;
    try {
        // Crea un nuevo objeto de cliente con los datos proporcionados.
        const newClient = new Client({
            name,
            lastName,
            numberId,
            email,
        });

        // Guarda el nuevo cliente en la base de datos.
        const clientSaved = await newClient.save();

        // Genera un token de acceso con la información del cliente y lo guarda en una cookie.
        const token = await createAccessToken({ numberId: clientSaved.numberId });
        res.cookie('token', token);

        // Devuelve la información del cliente creado en formato JSON.
        res.json({
            id: clientSaved._id,
            name: clientSaved.name,
            lastName: clientSaved.lastName,
            numberId: clientSaved.numberId,
            email: clientSaved.email,
            createdAt: clientSaved.createdAt,
            updatedAt: clientSaved.updatedAt,
        });
    } catch (error) {
        // Si ocurre un error durante el proceso, devuelve un mensaje de error.
        res.status(500).json({ message: error.message });
    }
};

/**
 * Obtiene la información de un cliente específico por su ID.
 * @route GET /api/clients/:id
 * @param {string} id - ID del cliente.
 * @returns {Object} - Respuesta JSON con la información del cliente.
 * @throws {Object} - Respuesta JSON con mensaje de error en caso de fallo.
 */
export const getClient = async (req, res) => {
    try {
        // Busca un cliente en la base de datos por su ID.
        const client = await Client.findById(req.params.id);

        // Si no se encuentra el cliente, devuelve un error.
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Devuelve la información del cliente en formato JSON.
        res.json(client);
    } catch (error) {
        // Si ocurre un error durante el proceso, devuelve un mensaje de error.
        res.status(500).json({ message: error.message });
    }
};

/**
 * Elimina un cliente específico por su ID.
 * @route DELETE /api/clients/:id
 * @param {string} id - ID del cliente a eliminar.
 * @returns {number} - Código de estado 204 en caso de éxito.
 * @throws {Object} - Respuesta JSON con mensaje de error en caso de fallo.
 */
export const deleteClient = async (req, res) => {
    try {
        // Busca un cliente en la base de datos por su ID y lo elimina.
        const client = await Client.findByIdAndDelete(req.params.id);

        // Si no se encuentra el cliente, devuelve un error.
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Devuelve un código de estado 204 para indicar que el cliente se eliminó con éxito.
        res.sendStatus(204);
    } catch (error) {
        // Si ocurre un error durante el proceso, devuelve un mensaje de error.
        res.status(500).json({ message: error.message });
    }
};

/**
 * Actualiza la información de un cliente específico por su ID.
 * @route PUT /api/clients/:id
 * @param {string} id - ID del cliente a actualizar.
 * @param {Object} body - Datos actualizados del cliente.
 * @returns {Object} - Respuesta JSON con la información del cliente actualizado.
 * @throws {Object} - Respuesta JSON con mensaje de error en caso de fallo.
 */
export const updateClient = async (req, res) => {
    try {
        // Busca un cliente en la base de datos por su ID y actualiza su información.
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        // Si no se encuentra el cliente, devuelve un error.
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        // Devuelve la información del cliente actualizado en formato JSON.
        res.json(client);
    } catch (error) {
        // Si ocurre un error durante el proceso, devuelve un mensaje de error.
        res.status(500).json({ message: error.message });
    }
};
