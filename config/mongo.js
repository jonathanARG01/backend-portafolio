import mongoose from 'mongoose';



/* ============================================= */
/*                  CONEXIÓN DB                  */
/* ============================================= */
const dbConnect = async () => {
    
    try {
    
        const DB_URI = process.env.DB_URI;
    
        await mongoose.connect( DB_URI );

        console.log( '***** CONEXIÓN CORRECTA *****' );
    
    } catch ( err ) {
        console.error( '***** ERROR DE CONEXIÓN *****', err );
    }

};



export default dbConnect;
