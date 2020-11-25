const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique : false
  },
  nrp: {
    type: String,
  },
  token : {
    type: String,
    required: true
  },
  status : {
    type: String,
    required: true
  },
  unit : {
    type: String,
    required: true
  },
  memilih : {
    type : Boolean,
    required : false
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
