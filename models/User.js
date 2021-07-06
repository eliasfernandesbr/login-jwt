const mongoose = require("mongoose");
// const ObjectId = Schema.ObjectId;

const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlenght: 3, maxlenght: 50 },
  email: { type: String, required: true, minlenght: 3, maxlenght: 100 },
  password: { type: String, required: true, minlenght: 6, maxlenght: 200 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);