var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var testsSchema = new Schema({
	'name' : { type: String, unique: true }
});

module.exports = mongoose.model('tests', testsSchema);
