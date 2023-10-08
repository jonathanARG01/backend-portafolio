
/**
 * ### MANEJADOR DE ERRORES HTTP ###
 * 
 * - Muestra el error
 * - Manda un status
 * - Manda un mensaje
 * 
 * # Es usado en los controladores de las rutas
 * 
 */

const httpError = () => {
    
    console.log( err );
    res.status( 500 );
    res.send( { error: 'Algo ocurrió' } );

}



module.exports = { httpError }
