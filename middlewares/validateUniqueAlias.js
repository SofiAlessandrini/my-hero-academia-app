// /middlewares/validateUniqueAlias.js
const Character = require('../models/Character');

const validateUniqueAlias = async (req, res, next) => {
  const { alias } = req.body;
  if (alias) {
    const existingCharacter = await Character.findOne({ alias });
    if (existingCharacter && existingCharacter._id.toString() !== req.params.id) {
      return res.status(400).send({ message: 'Alias ya existe' });
    }
  }
  next();
};

module.exports = validateUniqueAlias;
