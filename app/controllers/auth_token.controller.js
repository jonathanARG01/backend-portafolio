import checkAuth from "../helpers/checkAuth.js";



// POST: Login con email y password
export const login = ( req, res ) => {

    const { email, password } = req.body;

    if ( !email || !password ) return res.sendStatus( 400 );

    try {
        const user = checkAuth( email, password );
        return res.send( `Usuario ${ user.name } autenticado` );
    } catch ( err ) {
        return res.sendStatus( 401 );
    }

}



// POST: Solicitud autenticada con token para obtener el perfil de usuario


