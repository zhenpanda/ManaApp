'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mtg json example
/*

0: Object
    artist: "Viktor Titov"
    cmc: 7
    id: "4f803ca297853251e10ec17cf897ebc453b73f0a"
    imageName: "deceiver of form"
    layout: "normal"
    manaCost: "{6}{C}"
    mciNumber: "1"
    multiverseid: 407511
    name: "Deceiver of Form"
    number: "1"
    power: "8"
    rarity: "Rare"
    subtypes: Array[1]
    text: "({C} represents colorless mana.)↵At the beginning of combat on your turn, reveal the top card of your library. If a creature card is revealed this way, you may have creatures you control other than Deceiver of Form become copies of that card until end of turn. You may put that card on the bottom of your library."
    toughness: "8"
    type: "Creature — Eldrazi"

*/

var cardSchema = new Schema({
    cardName: String,
    setName: String,
    powerRating: Number,
    comments: [{
        type: 'string'
    }]
});


var Card = mongoose.model('Card', cardSchema);
module.exports = { Card: Card };
