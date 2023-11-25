import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js';


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

