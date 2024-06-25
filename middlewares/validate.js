const { validationResult } = require("express-validator")

//recolecta los errores que configuremos
const validate = (req,res,next) => {
    const errores = validationResult(req) //array de erroresde validación
    if(!errores.isEmpty()) {
        const extractedErrors = [];

        errores.array().map(error=>extractedErrors.push({[error.type]: error.msg}));



        return res.
        status(400).json({message: 'Error de validación.', errors: errores.array()});
    } else {
        next(); //metodo next, si está todo bien pasa al siguiente paso
    }
};

module.exports = validate; 