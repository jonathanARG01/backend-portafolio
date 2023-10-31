import technologies from '../technologies.json' assert { type: 'json' };
import crypto from 'node:crypto';



// GET Technologys
export const getTechnologies = ( req, res ) => {

    console.warn( '========== GET technologies controller ==========' );
    
    const { profile } = req.query;
    
    console.log( 'QUERY: ', profile );

    if ( profile ) {

        const filteredTechnologies = technologies.filter( (technology) => {
            return technology.profile === profile ;
        });

        console.log( filteredTechnologies );

        return res.json( filteredTechnologies );

    }

    res.json( technologies );

}



// GET Technology by name with dinamic segment
export const getTechnologyByName = (req, res) => {

    console.warn( '========== GET technology by name controller ==========' );
    console.log( 'REQ QUERY: ', req.query );

    const { name } = req.params;
    const technology = technologies.find((technology) => technology.name === name);
    
    if ( technology ) return res.json( technology );

    res.status(404).json({ message: 'Technology not found' });

};



// POST Technology
export const postTechnology = ( req, res) => {
    
    console.log( 'POST TECHNOLOGY CONTROLLER' );

    const { name, type, profile, img } = req.body;

    // Objeto que almacena la nueva tecnologia
    const newTechnology = {
        id: crypto.randomUUID(), // uuid v4
        name,
        type,
        profile,
        img
    }

    // Esto no sería REST, por que estoy guardando el estado de la app en memoria
    technologies.push( newTechnology );

    // Le mando el estado
    // 201 => Recurso creado
    res.status( 201 ).json( newTechnology );

}



// UPDATE Technology
export const updateTechnology = () => {}



// DELETE Technology
export const deleteTechnology = () => {}


