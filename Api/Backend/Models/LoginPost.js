const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const LoginPost = mongoose.model('LoginPost', {
 // _id : {type : ObjectId},
  Email: { type: String },
  Password: { type: String }
});

module.exports = LoginPost;