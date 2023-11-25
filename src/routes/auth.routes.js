import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller.js';
import { validateSchema } from "../middleware/validator.middleware.js";
import {loginSchema } from "../schemas/auth.schema.js";
import { registerSchema } from '../schemas/client.schema.js';

const router = Router()

router.post('/login', validateSchema(loginSchema), login);

router.post("/logout", logout);

export default router;