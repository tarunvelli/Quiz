var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var questionsSchema = new Schema({
	'question' : String,
	'1' : String,
	'2' : String,
	'3' : String,
	'4' : String,
	'correct' : String,
	'test_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'tests'
	}
});

module.exports = mongoose.model('questions', questionsSchema);
