const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    content1: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
