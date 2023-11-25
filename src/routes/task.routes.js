import { Router } from 'express';
import { authRequired } from "../middleware/validateToken.js";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} from '../controllers/task.controller.js';
import { validateSchema } from "../middleware/validator.middleware.js";
import { createTaskSchema } from '../schemas/task.schema.js';

const router = Router();
//obtener
router.get('/tasks', getTasks)
//obtener uno solo
router.get('/tasks/:id', authRequired, getTask)
//crear
router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask)
//eliminar uno solo
router.delete('/tasks/:id', authRequired, deleteTask)
//actualizar uno solo
router.put('/tasks/:id', authRequired, updateTask)

export default router