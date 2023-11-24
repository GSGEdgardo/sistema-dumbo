import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trime: true
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
    }
})

export default mongoose.model('User', userSchema)

