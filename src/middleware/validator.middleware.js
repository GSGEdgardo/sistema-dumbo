/**
 * Middleware para validar los datos de la solicitud según un esquema definido.
 * @param {object} schema - Esquema de validación (puede ser proporcionado por Zod u otro validador).
 * @returns {function} - Función middleware de Express para la validación de datos.
 */
export const validateSchema = (schema) => (req, res, next) => {
  try {
      // Intenta analizar los datos de la solicitud según el esquema proporcionado.
      schema.parse(req.body);

      // Si la validación tiene éxito, pasa la solicitud al siguiente middleware.
      next();
  } catch (error) {
      // Si hay errores de validación, responde con un estado de error y mensajes de error.
      return res
          .status(400)
          .json({ message: error.errors.map((error) => error.message) });
  }
};
