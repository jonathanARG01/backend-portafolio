/* ============================================= */
/*                 Importaciones                 */
/* ============================================= */
import dotenv from 'dotenv';
dotenv.config();

//? ##########################################
//?    PASOS PARA CREAR SERVIDOR EN EXPRESS
//? ##########################################

//? 01- Importar 'express'
import express, { json } from 'express';

// Middlewares
import cors from 'cors';
import pruebasMiddleware from './app/middlewares/pruebas.js';
import cookieParser from 'cookie-parser';

import dbConnect from './config/mongo.js';

import routesUsers        from './app/routes/users.routes.js';
import routesTechnologies from './app/routes/technologies.routes.js';
import routesAuth         from './app/routes/auth.routes.js';
import routesAuthSession  from './app/routes/auth_session.routes.js';
import routesAuthToken    from './app/routes/auth_token.routes.js';



//? 02- Crear 'app'
const app = express();

app.disable('x-powered-by');

//? 03- Definir 'PORT'
const PORT = process.env.PORT || 3000;



// Middlewares
app.use( cors() );

// Middleware para parsear las cookies de la request
app.use( cookieParser() );

// Middleware para parsear el BODY de la request
app.use( json() );

// Middleware de pruebas
app.use( pruebasMiddleware );



//? 04- Crear las rutas (desde otro archivo)
app.use('/users',        routesUsers);
app.use('/technologies', routesTechnologies);
app.use('/auth',         routesAuth);
app.use('/auth_session', routesAuthSession);
app.use('/auth_token',   routesAuthToken);



// dbConnect();



//? 05- Escuchar en el puerto
app.listen(PORT, () => {
    console.log('Servidor corriendo por el puerto', PORT)
});


