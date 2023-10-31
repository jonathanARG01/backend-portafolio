import { Router } from 'express';
const router = Router();

import {
    getTechnologies,
    getTechnologyByName,
    postTechnology,
    updateTechnology,
    deleteTechnology
} from './../controllers/technologies.controller.js';



router.get('/',         getTechnologies);
router.get('/:name',    getTechnologyByName);
router.post('/',        postTechnology);
router.patch('/name',   updateTechnology);
router.delete('/:name', deleteTechnology);



router.get('*', (req, res) => {
    res.status(404);
    res.send({ error: 'URL Not found - 404' });
});



export default router;
