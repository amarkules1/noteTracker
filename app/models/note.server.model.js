const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const NoteSchema = new Schema({
  noteNum: String,
  subject: String,
  note: String, 
}); 
mongoose.model('Note', NoteSchema);