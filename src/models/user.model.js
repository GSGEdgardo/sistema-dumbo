import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Definición del esquema del modelo de usuario.
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    numberId: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
}, {
    timestamps: true,  // Se habilita el seguimiento de las marcas de tiempo (createdAt, updatedAt).
});

// Antes de guardar el usuario en la base de datos, se realiza un hash de la contraseña.
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password') || user.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password, salt);
            user.password = hash;
            next();
        } catch (error) {
            return next(error);
        }
    } else {
        return next();
    }
});

// Exportación del modelo 'User' para su uso en otras partes de la aplicación.
export default mongoose.model('User', userSchema);
