const {body} = require('express-validator');

//CAMPOS A VALIDAR


exports.name = body('name')
    .notEmpty().withMessage('El nombre de usuario es obligatorio')
    .isLength({min: 4, max: 20})
    .withMessage('La longitud del nombre de usuario debe ser entre 4 y 20 caracteres.');

exports.alias = body('alias')
    .notEmpty().withMessage('El alias de usuario es obligatorio')
    .isLength({min: 4, max: 20})
    .withMessage('La longitud del nombre de usuario debe ser entre 4 y 20 caracteres.');

exports.age = body('age')
    .notEmpty().withMessage('La edad es obligatoria')
    .isNumeric()
    .withMessage('Debe ser un número');

exports.quirk = body('quirk')
    .notEmpty()
    .isLength({min: 4, max: 20})
    .withMessage('El quirk es obligatorio')
