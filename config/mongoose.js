const config = require('./config'); 
const mongoose = require('mongoose');
module.exports = function() {
  const db = mongoose.connect(config.db);
  require('../app/models/note.server.model');
  return db; 
};