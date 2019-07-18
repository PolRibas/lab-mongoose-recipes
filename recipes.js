'use strict';

const mongoose = require('mongoose');

const data = require('./data.js');
const Recipe = require('./models/Recipe.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

const createRecepies = async data => {
    try {
        const response = await Recipe.insertMany(data);
        response.forEach(element => console.log(element.title));
    }
    catch(error){
        console.log(error)
    } 
}

const updateRecepies = async () => {
    try {
        const response = await Recipe.updateOne({title: "Rigatoni alla Genovese"}, {duration: 100});
        console.log(response);
    }
    catch(error){
        console.log(error)
    } 
}

const remuveOne = async () => {
    try{
        const delate = await Recipe.deleteOne({ title: 'Carrot Cake' })
        console.log(delate);
    }
    catch(err){
        console.log(err)
    }
    }

createRecepies(data);
updateRecepies();
remuveOne();