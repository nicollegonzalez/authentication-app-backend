const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('./task-model');

const SurfBreak = new Schema({
  name: String,
  county: String,
  latitude: Number,
  longitude: Number,
  spot_id: Number,
  forcast: Array,
  image: Array,

  // tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  
});

const SurfBreak = mongoose.model('Project', projectSchema);

module.exports = SurfBreak;