import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/user.model.js';
import { connectDB } from './db.js';

/**
 * Función para poblar la base de datos con datos iniciales (seeder).
 * @function
 * @async
 * @returns {Promise<void>} Una promesa que se resuelve una vez que la base de datos ha sido poblada con datos iniciales.
 */
const seedDatabase = async () => {
  try {
    // Se conecta a la base de datos antes de ejecutar el seeder.
    await connectDB();

    // Borra todos los documentos de la colección de usuarios.
    await User.deleteMany({});

    // Hash de la contraseña del administrador.
    const passwordHash = await bcrypt.hash('Jaqamain3pals', 10);

    // Datos del administrador.
    const adminData = {
      username: 'Ochietto',
      password: passwordHash,
      numberId: '204168530',
    };

    // Crea el usuario administrador en la base de datos.
    const admin = await User.create(adminData);

    // Imprime un mensaje en la consola indicando que el seeder se ejecutó con éxito.
    console.log('Seeder ejecutado con éxito');
  } catch (error) {
    // Imprime un mensaje en la consola si hay un error al ejecutar el seeder.
    console.error('Error al ejecutar el seeder:', error);
  } finally {
    // Cierra la conexión a la base de datos después de ejecutar el seeder.
    mongoose.connection.close();
  }
};

// Se llama a la función para ejecutar el seeder.
seedDatabase();
