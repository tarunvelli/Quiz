var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var questionsSchema = new Schema({
	'question' : String,
	'1' : Array,
	'2' : Array,
	'3' : Array,
	'4' : Array,
	'correct' : String,
	'test_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'tests'
	}
});

module.exports = mongoose.model('questions', questionsSchema);
