'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deckSchema = new Schema({
    dateTime: String,
    deckName: String,
    notes: String,
    cards: [{
        type: String
    }],
    wins: Number,
    loses: Number,
    archetype: String
});

var Deck = mongoose.model('Deck', deckSchema);
module.exports = { Deck: Deck };