import { Router } from 'express';
const router = Router();

import {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
} from './../controllers/users.controller.js';



router.get('/',       getUsers);
router.get('/:id',    getUser);
router.post('/',      postUser);
router.patch('/:id',  updateUser);
router.delete('/:id', deleteUser);



router.get('*', (req, res) => {
    res.status(404);
    res.send({ error: 'URL Not found - 404' });
});



export default router;
