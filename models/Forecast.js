const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const User = require('./task-model');

const forecastSchema = new Schema({
  spot_id: Number,
  spot_name: String,
  date: String,
  day: String,
  gmt: String,
  hour: String,
  latitude: Number,
  live: Number,
  longitude: Number,
  shape: String,
  // shape_detail: {
  // swell: String,
  // tide: String,
  // wind: String
  // }, //Can I do this?
  shape_full: String,
  size: Number,
  size_ft: Number,
  // warnings: Array,
  

  // tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  
});

const Forecast = mongoose.model('Forecast', forecastSchema);

module.exports = Forecast;