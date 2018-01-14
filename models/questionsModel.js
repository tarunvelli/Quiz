var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var questionsSchema = new Schema({
	'question' : String,
	'one' : String,
	'two' : String,
	'three' : String,
	'four' : String,
	'correct' : String,
	'test_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'tests'
	}
});

module.exports = mongoose.model('questions', questionsSchema);
