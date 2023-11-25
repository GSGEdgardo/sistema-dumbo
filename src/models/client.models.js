import mongoose from 'mongoose';

// Definición del esquema del modelo de cliente.
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
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
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    points: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,  // Se habilita el seguimiento de las marcas de tiempo (createdAt, updatedAt).
});

// Creación del modelo 'Client' utilizando el esquema definido.
const Client = mongoose.model('Client', clientSchema);

// Exportación del modelo 'Client' para su uso en otras partes de la aplicación.
export default Client;
