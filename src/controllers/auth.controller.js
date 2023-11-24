import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js';
export const register = async (req, res) => {
    const { email, password, username, numberId } = req.body;

    try {

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
            numberId
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({numberId: userSaved.numberId});

        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            numberId: userSaved.numberId,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({messagge: error.message});
    }
}

export const login = (req, res) => res.send('login');