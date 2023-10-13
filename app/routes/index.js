// import { Router } from 'express';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import { readdirSync } from 'fs';



// const router = Router();

// // Url que hace referencia a index.js
// const __filename = fileURLToPath(import.meta.url);

// // URL al directorio 'routes'
// const __dirname = dirname(__filename);

// const pathRouter = __dirname;



// const removeExtension = (fileName) => {
//     return fileName.split('.').shift();
// }



// readdirSync(pathRouter).filter( (file) => {
    
//     const fileWithOutExt = removeExtension(file);
//     const skip = ['index'].includes(fileWithOutExt);
    
    
//     // Si es FALSE
//     if (!skip) {

//         import(`./${fileWithOutExt}.js`).then((module) => {

//             router.use(`/${fileWithOutExt}`, module.default);
//             console.log('CARGAR RUTA ---->', fileWithOutExt);
            
//         }).catch((error) => {
//             console.error('Error al cargar el módulo', fileWithOutExt, error);
//         });
        
//     }

// });



// router.get('*', (req, res) => {
//     res.status(404);
//     res.send({ error: 'Not found - 404' });
// });



// export default router;
