'use strict';

var mongoose = require('mongoose');
//set mongoose schema

var Schema = mongoose.Schema;

// var BookSchema = new Schema({
// 	title: String,
// 	keywords: Array,
// 	published: Boolean
// });

var BookSchema = new Schema({
	title: String,
	title: {
		type: String,
		require: true
	}
})

module.exports = mongoose.model('Book', BookSchema);