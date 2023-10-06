/* ============================================= */
/*                 Importaciones                 */
/* ============================================= */
const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');



/* ============================================= */
/* Le paso su controlador especifico a cada ruta */
/* ============================================= */

// TODO: 127.0.0.1:27017/users/ --> LISTA
router.get('/', getUsers);

// TODO: 127.0.0.1:27017/users/ --> DETALLE
router.get('/:id', getUser);

router.post('/', createUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);



module.exports = router;
