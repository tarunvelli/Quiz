var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var resultsSchema = new Schema({
	'name' : String,
	'roll_no' : String,
	'stream' : String,
	'college' : String,
	'score' : Number,
	'test_id' : {
		type: Schema.Types.ObjectId,
		ref: 'tests'
	}
});

module.exports = mongoose.model('results', resultsSchema);
