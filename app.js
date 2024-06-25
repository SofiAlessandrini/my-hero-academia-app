require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');
const characterRoutes = require('./routes/charactersRoutes');

const dbConnect = require('./database/dbConnect');

const app = express();
const PORT = 8080;

// Middlewares
app.use(express.json()); //
app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.send ("<h3> Bienvenidos a mi primer servidor </h3>");
});

app.use('/characters', characterRoutes);

dbConnect(); //conexión a MongoDB //


app.listen(PORT, () => {
    console.log(`App de ejemplo, escuchando en el puerto ${PORT}. Pruebe en: http://localhost:${PORT}`);
}
);







