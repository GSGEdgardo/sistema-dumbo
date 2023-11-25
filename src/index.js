import app from "./app.js";
import { connectDB } from './db.js';

/**
 * Conecta a la base de datos y pone en marcha el servidor en el puerto 3000.
 * @returns {void}
 */
connectDB();
app.listen(3000);
console.log('Server on port', 3000);
