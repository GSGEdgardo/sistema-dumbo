import { Router } from 'express';
import { authRequired } from "../middleware/validateToken.js";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} from '../controllers/task.controller.js';

const router = Router();
//obtener
router.get('/tasks', authRequired, getTasks)
//obtener uno solo
router.get('/tasks/:id', authRequired, getTask)
//crear
router.post('/tasks', authRequired, createTask)
//eliminar uno solo
router.delete('/tasks/:id', authRequired, deleteTask)
//actualizar uno solo
router.put('/tasks/:id', authRequired, updateTask)

export default router