import Client from "../models/client.models.js";
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js';

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createClient = async (req, res) => {
    const { name, lastName, numberId, email } = req.body;
    try {
        
        const newClient = new Client({
            name,
            lastName,
            numberId,
            email,
        });

        const clientSaved = await newClient.save();
        const token = await createAccessToken({numberId: clientSaved.numberId});
        res.cookie('token', token)
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
        res.status(500).json({messagge: error.message});
    }
}

export const getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client not found' });
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client not found' });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!client) return res.status(404).json({ message: 'Client not found' });
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
