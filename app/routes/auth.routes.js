import { Router } from 'express';
const router = Router();



import {
    getAuth,
    getAuthAutenticado,
    getAuthAutorizado
} from './../controllers/auth.controller.js';



// Public endpoint (No autenticado ni autorizado)
router.get('/publico', getAuth);


// Endpoint autenticado
router.post('/autenticado', getAuthAutenticado);


// Endpoint autorizado
router.post('/autorizado', getAuthAutorizado);



router.get('*', (req, res) => {
    res.status(404);
    res.send({ error: 'URL Not found - 404' });
});



export default router;
