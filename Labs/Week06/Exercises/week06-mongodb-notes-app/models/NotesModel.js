const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: String,
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'], // Allowed values
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
})

// schema.pre('save', function(next) {
//     this.dateUpdated = Date.now(); // Update dateUpdated to current date and time
//     next();
// });
  
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;