import { Router } from 'express';
const router = Router();



import { login, profile } from '../controllers/auth_session.controller.js';



router.post('/login',  login);
router.get('/profile', profile);



export default router;
