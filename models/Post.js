const mongoose = require('mongoose');


// schema, how the posts "look"
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//now Posts is gonna show up on atlas mongoDB
module.exports = mongoose.model('Posts', PostSchema);