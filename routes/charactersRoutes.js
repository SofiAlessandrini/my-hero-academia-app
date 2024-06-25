const express = require('express');
const router = express.Router();
const characterController = require('../controllers/character.controllers');
const {name, alias, age, quirk} = require('../utils/validator');
const validateObjectId = require('../middlewares/validateObjectId');
const validateUniqueAlias = require('../middlewares/validateUniqueAlias');

// router.get('/test', characterController.test);
router.get('/animenews', characterController.animeNews);


router.get('/', characterController.getCharacter);

router.get('/:id', validateObjectId, characterController.getCharacterById);

router.get('/search/:alias', characterController.getCharacterByAlias);

router.get('/quirk/:quirk', characterController.getCharacterByQuirk);

router.get('/role/:role', characterController.getCharacterByRole);


router.post('/create', [name, alias, age, quirk], validateUniqueAlias, characterController.createCharacter);

router.put('/:id', [name, alias, age, quirk], validateObjectId, validateUniqueAlias, characterController.updateCharacter);

router.delete('/delete/:id', validateObjectId, characterController.deleteCharacter);

router.delete('/:id', characterController.unsuscribeCharacter);


module.exports = router;