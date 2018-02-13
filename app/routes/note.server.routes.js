const notes =    require('../../app/controllers/note.server.controller');
module.exports = function(app) {
  app.route('/notes')
    .post(notes.create)
    .get(notes.list);
	
  app.route('/notes/:noteId')
	.get(notes.read)
	.delete(notes.delete);
	
  app.param('noteId', notes.noteByID);
 };