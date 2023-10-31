import { Router } from 'express';
const router = Router();



import { login } from '../controllers/auth_token.controller.js';



router.post('/login', login);



export default router;
