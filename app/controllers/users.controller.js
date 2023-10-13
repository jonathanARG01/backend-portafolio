// import httpError from "../helpers/handleError";
import createUserModel from '../models/users.model.js';



// GET Users
export const getUsers = ( req, res ) => {

    console.log( 'GET USERS CONTROLLER' );
    res.send( { list: [1, 2, 3] } );

}



// GET User
export const getUser = () => {
    
}



// POST User
export const postUser = async ( req, res) => {
    
    console.log( 'POST USERS CONTROLLER' );

    try {
        
        // Obtengo los datos desde el body
        const { name, age, email } = req.body;

        const resDetail = await createUserModel({
            name, age, email
        });

        console.log('USUARIO CREADO: ', resDetail);
        
        res.send({ data: resDetail });

    } catch ( e ) {

        // httpError( res, e );

        console.log( e );
        res.status( 500 );
        res.send( { error: 'Algo ocurrió' } );

    }

}



// UPDATE User
export const updateUser = () => {
    
}



// DELETE User
export const deleteUser = () => {
    
}


