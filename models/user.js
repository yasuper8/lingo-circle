const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  imag: String,
  nativeLang: {
    type: String,
    required: true
  },
  learnLang: {
    type: String,
    required: true
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
