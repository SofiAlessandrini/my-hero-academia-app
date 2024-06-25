// /controllers/characterController.js
const { default: axios } = require('axios');
const Character = require('../models/Character');

// Obtener todos los personajes -GET
exports.getCharacter = async (req, res) => {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: 'Error al obtener personajes', error: error.message });
    }
};

// Get by ID

exports.getCharacterById = async (req, res) => {
   
    const foundCharacter = await Character.findById(req.params.id)

    if (foundCharacter){
        res.status(200).json(foundCharacter);
    } else {
        res.status(404).json({error: 'Id de personaje no encontrado.'});
    }
};


// Get by Alias
exports.getCharacterByAlias = async (req, res) => {
    const foundCharacter = await Character.findOne ({alias: req.params.alias})

    if (foundCharacter) {
        res.status(200).json(foundCharacter);
    } else {
        res.status(404).json({error: 'Alias de personaje no encontrado.'});
    }
};

// Get by Quirk
exports.getCharacterByQuirk = async (req, res) => {
    const foundCharacter = await Character.findOne ({quirk: req.params.quirk})

    if (foundCharacter) {
        res.status(200).json(foundCharacter);
    } else {
        res.status(404).json({error: 'Quirk de personaje no encontrado.'});
    }
};


//Get by role
exports.getCharacterByRole = async (req, res) => {
    try {
        const foundCharacter = await Character.find({ role: req.params.role });

        if (foundCharacter) {
            res.status(200).json(foundCharacter);
        } else {
            res.status(404).json({ error: 'Rol de personaje no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener personajes por rol -' + error.message });
    }
};



//SOLICITUD POST

exports.createCharacter = async (req, res) => {
    try{
    const newCharacter = await Character.create(req.body);

    res.status(201).json({message: 'Ok', data: newCharacter}) ;
    } catch (error) {
        res
        .status(500)
        .json ({message: 'Error al crear personaje -'+ error.message});
    }

   
};

//SOLICITUD UPDATE 

exports.updateCharacter = async (req, res) => {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({ message: 'Ok', data: updatedCharacter });
    } catch (error) {
        res
        .status(500)
        .json ({message: 'Error al actualizar personaje -'+ error.message});
    }
};


//SOLICITUD DELETE (POR COMPLETO)

exports.deleteCharacter = async (req, res) => {
    try {
        const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Personaje eliminado exitosamente.', data: deletedCharacter})
    } catch (error) {
        res
        .status(500)
        .json ({message: 'Error al eliminar personaje -'+ error.message});

    }
}; 


//SOLICITUD DELETE (SOLO DEJAR INACTIVO - BORRADO LOGICO)

exports.unsuscribeCharacter = async (req, res) => {
    try {
        const deletedCharacter = await Character.findByIdAndUpdate(req.params.id, {active: false});
        res.status(200).json({message: 'Personaje dado de baja exitosamente.', data: deletedCharacter})
    } catch (error) {
        res
        .status(500)
        .json ({message: 'Error al dar de baja a personaje -'+ error.message});

    }
}; 



// Ruta para obtener noticias de anime
exports.animeNews = async (_, res) => {
    try {
        const {data} = await axios.get('https://api.jikan.moe/v4/top/anime');
        res.status(200).json({users: data});
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener noticias de anime-'+ error.message });
    }
};