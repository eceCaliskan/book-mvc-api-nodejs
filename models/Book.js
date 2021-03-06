const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = Book = mongoose.model("Book", bookSchema)