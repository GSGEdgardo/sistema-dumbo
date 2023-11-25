import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    numberId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    points: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
