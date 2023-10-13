/* ============================================= */
/*                 Importaciones                 */
/* ============================================= */
import { Router } from 'express';
const router = Router();

import {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
} from './../controllers/users.controller.js';



/* ============================================= */
/* Le paso su controlador especifico a cada ruta */
/* ============================================= */
router.get('/',       getUsers);
router.get('/:id',    getUser);
router.post('/',      postUser);
router.patch('/:id',  updateUser);
router.delete('/:id', deleteUser);

// En caso de que no se encuentre una url que coincida
router.get('*', (req, res) => {
    res.status(404);
    res.send({ error: 'URL Not found - 404' });
});



export default router;
