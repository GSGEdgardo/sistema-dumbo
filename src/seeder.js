import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/user.model.js';
import { connectDB } from './db.js';


const seedDatabase = async () => {
  try {
    await connectDB();
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash('Jaqamain3pals', 10);

    const adminData = {
      username: 'Ochietto',
      password: passwordHash,
      numberId: '204168530',
    };

    const admin = await User.create(adminData);

    console.log('Seeder ejecutado con éxito');
  } catch (error) {
    console.error('Error al ejecutar el seeder:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
