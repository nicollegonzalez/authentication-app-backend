const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const countySchema = new Schema({
  name: {type: String, unique: true},
  surfBreakIDs: Array
}, 

);

const CountyModel = mongoose.model('County', countySchema);
module.exports = CountyModel;