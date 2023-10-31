// import httpError from "../helpers/handleError";
import createUserModel from '../models/users.model.js';
import crypto from 'node:crypto';



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

        const newUser = await createUserModel({
            id: crypto.randomUUID(),
            name,
            age,
            email
        });

        console.log('USUARIO CREADO: ', newUser);
        
        res.send({ data: newUser });

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


