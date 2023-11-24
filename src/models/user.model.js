import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trime: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trime: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        trime: true
    },
    numberId:{
        type: String,
        required: true,
        trime: true,
        unique: true
    }
},{
    timestamps: true
})

export default mongoose.model('User', userSchema)

