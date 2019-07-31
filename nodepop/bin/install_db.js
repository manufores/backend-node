'use strict';

var mongoose = require('mongoose');
const conn = mongoose.connection;
var fs = require('fs');

//require('../models/Anuncio.js');

//var Anuncio = mongoose.model('Anuncio');

var file = ('./config/anuncios.json');


//----------------------------------------------------------------------------//
//Conexion con la base de datos

conn.once('open', () => {
    console.log('Conectado a MongoDB en', conn.name);
    var myquery = { _id: { $ne: 'undefined' } };
    conn.collection("anuncios").deleteMany(myquery, async function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        await fs.readFile(file, function (err, data) {
            console.log('Comenzamos lectura');
            if (err) {
                return console.log('Error en la lectura', err);
            }
            //----------------------------------------------------------//
            //Parseamos la parte de anuncios.json
            var jsonFileAnuncios = JSON.parse(data).anuncios;
            conn.collection("anuncios").insertMany(jsonFileAnuncios, function (err, obj) {
                if (err) throw err;
                console.log(obj.result.n + " document(s) inserted");
                conn.close();
            });
        });
    });
});

mongoose.connect('mongodb://localhost:27017/nodepop', { useNewUrlParser: true });



