/* ============================================= */
/*                 Importaciones                 */
/* ============================================= */
const express = require('express');
const router = express.Router();
const { getTechnologies, getTechnology, createTechnology, updateTechnology, deleteTechnology } = require('../controllers/technologies');



router.get('/', getTechnologies);

router.get('/:id', getTechnology);

router.post('/', createTechnology);

router.patch('/:id', updateTechnology);

router.delete('/:id', deleteTechnology);



module.exports = router;
