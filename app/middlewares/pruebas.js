// MIDDLEWARE: Se ejecuta justo después de el 'REQUEST' y antes de la 'RESPONSE'.
// Para que continue con la ejecución es imperativo el uso de 'next()'.
// De lo contrario se quedará a la espera y no continuará con el resto de código
const pruebasMiddleware = (req, res, next) => {

    let method = req.method;
    let url = req.url;
    // let headers = req.headers;
    let body = req.body;

    console.log('METHOD: ', method);
    console.log('URL: ', url);
    // console.log('HEADERS: ', headers);
    console.log('BODY: ', body);

    next();

};



export default pruebasMiddleware;
