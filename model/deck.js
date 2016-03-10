'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deckSchema = new Schema({
    creator: String,
    dateTime: String,
    deckName: String,
    notes: String,
    deckList: [{
        type: String
    }],
    wins: Number,
    loses: Number,
    archetype: String
});

var Deck = mongoose.model('Deck', deckSchema);
module.exports = { Deck: Deck };