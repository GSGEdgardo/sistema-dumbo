import mongoose from 'mongoose';

/**
 * Conecta a la base de datos MongoDB.
 * @returns {Promise<void>} Una promesa que se resuelve una vez que la conexión a la base de datos se ha establecido con éxito.
 */
export const connectDB = async () => {
    try {
        // Se utiliza mongoose para conectarse a la base de datos MongoDB.
        await mongoose.connect('mongodb+srv://EdgardoOrtiz:Gaog_0197@cluster0.1kgwezc.mongodb.net/');

        // Se imprime un mensaje en la consola si la conexión es exitosa.
        console.log(">>> DB is connected");
    } catch (error) {
        // Se imprime un mensaje en la consola si hay un error en la conexión.
        console.log(error);
    }
};
