'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cubeSchema = new Schema({
    cubeName: String,
    date: String,
    cardList: [{
        type: String
    }]
});

var Cube = mongoose.model('Cube', cubeSchema);
module.exports = { Cube: Cube };