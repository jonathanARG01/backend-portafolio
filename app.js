/* ============================================= */
/*                 Importaciones                 */
/* ============================================= */
import dotenv from 'dotenv';
dotenv.config();

//? 00 - PASOS PARA CREAR SERVIDOR EN EXPRESS

//? 01- Importar 'express'
import express, { json } from 'express';
import cors from 'cors';

import dbConnect from './config/mongo.js';

import routesUsers from './app/routes/users.routes.js';



//? 02- Crear 'app'
const app = express();

//? 03- Definir 'PORT'
const PORT = process.env.PORT || 3000;



// Middlewares
app.use( cors() );
app.use( json() );



// MIDDLEWARE: Se ejecuta justo después de el 'REQUEST' y antes de la 'RESPONSE'.
// Para que continue con la ejecución es imperativo el uso de 'next()'.
// De lo contrario se quedará a la espera y no continuará con el resto de código
app.use( ( req, res, next ) => {

    let method  = req.method;
    let url     = req.url;
    let headers = req.headers;
    let body    = req.body;

    console.log( 'METHOD: ', method );
    console.log( 'URL: ', url );
    console.log( 'HEADERS: ', headers );
    console.log( 'BODY: ', body );

    if ( method !== 'GET' ) {
        console.log( 'El metodo NO es un GET' );
    } else {
        console.log( 'El metodo SI es un GET' );
    }

    next();

});


//? 04- Crear las rutas (desde otro archivo)
app.use('/users', routesUsers);



dbConnect();


//? 05- Escuchar en el puerto
app.listen(PORT, () => {
    console.log('Servidor corriendo por el puerto', PORT)
});


