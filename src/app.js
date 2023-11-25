import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import clientRoutes from './routes/clients.routes.js';

/**
 * Configuración de la aplicación Express.
 * @type {express.Application}
 */
const app = express();

// Middleware para registrar las solicitudes en la consola durante el desarrollo.
app.use(morgan('dev'));

// Middleware para parsear el cuerpo de las solicitudes como JSON.
app.use(express.json());

// Middleware para analizar las cookies de las solicitudes.
app.use(cookieParser());

// Rutas relacionadas con la autenticación.
app.use('/api', authRoutes);

// Rutas relacionadas con los clientes.
app.use('/api', clientRoutes);

export default app;
