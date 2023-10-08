const { httpError } = require("../helpers/handleError");
const userModel = require('../models/users');


// GET Users
const getUsers = ( req, res ) => {
    res.send( { list: [1, 2, 3] } );
}


// GET User
const getUser = () => {
    
}


// POST User
const createUser = async ( req, res) => {
    
    try {
        
        // Obtengo los datos desde el body
        const { name, age, email } = req.body;

        const resDetail = await userModel.create({
            name, age, email
        });

        res.send({ data: resDetail });

    } catch ( e ) {
        httpError( res, e );
    }

}


// UPDATE User
const updateUser = () => {
    
}


// DELETE User
const deleteUser = () => {
    
}



module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }
