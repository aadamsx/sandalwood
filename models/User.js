const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema({
  phone: {
    type: String,
    require: false,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
});

UserSchema.plugin(timestamp);

const User = mongoose.model('User', UserSchema);

module.exports = User;