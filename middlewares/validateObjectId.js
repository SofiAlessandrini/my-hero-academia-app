// /middlewares/validateObjectId.js
const mongoose = require('mongoose');

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }
  next();
};

module.exports = validateObjectId;
