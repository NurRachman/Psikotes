const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wptSchema = new Schema([{
    w1: {type: String},
}]);

const Wpt = mongoose.model('Wpt', wptSchema);

module.exports = Wpt;