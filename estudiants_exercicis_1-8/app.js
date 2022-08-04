const express = require('express');

const app = express();
const mongoose = require('mongoose');

// TODO: Cambar a tu Conneciton String a MongoDB Atlas; base de datos 'countries'
const url = 'mongodb+srv://root:root@mongodb.dj8dv.mongodb.net/countries?retryWrites=true&w=majority';


app.set('view engine', 'ejs');

const errorController = require('./controllers/error');
const countryRoutes = require('./routes/countriesRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(countryRoutes);

app.use(errorController.get404);

mongoose.connect(url, { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log("Error al conectar a la BBDD: ", error);
        return;
    }
    app.listen(3000);
});