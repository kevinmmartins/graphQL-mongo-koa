const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  birthday: Date,
  nick: String,
  age: Number,
});

module.exports = mongoose.model('User', UserSchema);