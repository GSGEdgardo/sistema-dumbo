import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://EdgardoOrtiz:Gaog_0197@cluster0.1kgwezc.mongodb.net/');
        console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }
};