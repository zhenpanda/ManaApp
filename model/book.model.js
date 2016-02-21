'use strict';

var mongoose = require('mongoose');
//set mongoose schema

var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	category: String
});

// var BookSchema = new Schema({
// 	title: String,
// 	published: {
// 		type: Date,
// 		default: Date.now
// 	},
// 	keywords: Array,
// 	published: Boolean,
// 	author: {
// 		type: Schema.ObjectId,
// 		ref:'User'
// 	},
// 	detail: {
// 		modelNumber: Number,
// 		hardcover: Boolean,
// 		reviews: Number,
// 		rank: Number
// 	}
// })



//export pass in schema
module.exports = mongoose.model('Book', BookSchema);