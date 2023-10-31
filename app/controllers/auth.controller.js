import checkAuth from "../helpers/checkAuth.js";



// GET Auth
export const getAuth = ( req, res ) => {

    res.send( "Endpoint publico" );

}



// GET Auth Autenticado
export const getAuthAutenticado = ( req, res ) => {

    const { email, password } = req.body;
    if ( !email || !password ) return res.sendStatus( 400 );

    try {
        const user = checkAuth( email, password );
        return res.send( `Usuario ${ user.name } autenticado` );
    } catch ( err ) {
        return res.sendStatus( 401 );
    }

    // checkAuth( email, password )
    //     .then( user => res.send( `Usuario ${ user.name } autenticado` ) )
    //     .catch( err => res.sendStatus( 401 ) );

}



// GET Auth Autorizado solo para administradores
export const getAuthAutorizado = ( req, res ) => {

    const { email, password } = req.body;
    if ( !email || !password ) return res.sendStatus( 400 );
    
    try {
    
        const user = checkAuth( email, password );
        // Error de autorización (403)
        if ( user.role !== 'admin' ) return res.sendStatus( 403 );
        return res.send( `Usuario administrador ${ user.name } autenticado` );
    
    } catch ( err ) {
        return res.sendStatus( 401 );
    }

}

