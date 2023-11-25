import User from "../models/user.model.js";
import Client from "../models/client.models.js";
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js';

export const register = async (req, res) => {
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

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userFound = await User.findOne({username})
        if(!userFound) return res.status(400).json({
            message: "User not found"
        });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({
            message: "Invalid credentials"
        });

        const token = await createAccessToken({id: userFound._id, numberId: userFound.numberId});
        res.cookie('token', token)
        res.json({
            id:userFound._id,
            numberId: userFound.numberId,
        });
    } catch (error) {
        res.status(500).json({messagge: error.message});
    }
}

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    try {
        // Obtiene todos los clientes desde la base de datos
        const allClients = await Client.find();

        // Devuelve la información de todos los clientes
        res.json(allClients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
