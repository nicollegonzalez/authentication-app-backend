const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, unique: true},
  password: {type: String},
  // I am anticipating I will need these user properties later
  // googleID: String,
  // email: String,
  // image: String,
  liked: {
    type: [{ type: Schema.Types.ObjectId, ref: 'SurfBreak' }]
  },
  
}, 
// {
//   timestamps: true
// }
);

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;