var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var testsSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('tests', testsSchema);
