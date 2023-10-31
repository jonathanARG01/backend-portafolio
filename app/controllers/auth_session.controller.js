import checkAuth from "../helpers/checkAuth.js";
import { nanoid } from "nanoid";
import { USERS_BBDD } from "../users.js";



// Array de sesiones activas
const sessions = [];



// POST: Login con email y password
export const login = ( req, res ) => {

    const { email, password } = req.body;

    if ( !email || !password ) return res.sendStatus( 400 );

    try {
        
        const { guid } = checkAuth( email, password );

        const sessionId = nanoid();
        sessions.push( { sessionId, guid } );

        // Nombre, Valor, Opciones

        // Esta cookie se envia al cliente y se almacena en el navegador el cual la envia en cada peticion al servidor para que el servidor pueda identificar al cliente cuando este se autentique

        // Gracias a la opcion httpOnly, esta cookie no puede ser leida ni modificada por el cliente, solo puede ser enviada al servidor

        // El servidor puede leer y modificar esta cookie

        // La cookie se almacena en el navegador hasta que el usuario cierre el navegador o hasta que el servidor la elimine

        // Gracias a este metodo de autenticacion, el servidor no necesita almacenar las credenciales de los usuarios en una base de datos, solo necesita almacenar el id de sesion de cada usuario

        res.cookie('sessionId', sessionId, {
            httpOnly: true
        });

        return res.send();
    
    } catch ( err ) {
        return res.sendStatus( 401 );
    }

}



// GET: Solicitud autenticada con token para obtener el perfil de usuario
export const profile = ( req, res ) => {

    const { sessionId } = req.cookies;

    if ( !sessionId ) return res.sendStatus( 401 );

    const session = sessions.find( session => session.sessionId === sessionId );

    if ( !session ) return res.sendStatus( 401 );
    
    const user = USERS_BBDD.find( user => user.guid === session.guid );

    if ( !user ) return res.sendStatus( 401 );

    delete user.password;

    return res.send( user );

}


