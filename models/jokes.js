const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const JokesSchema =  new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = Jokes = mongoose.model('jokes', JokesSchema)