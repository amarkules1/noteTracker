module.exports = function(app) {
    const index = require('../controllers/index.server.controller');
    const getNotes = require('../controllers/getNotes.server.controller');
	const viewNote = require('../controllers/viewNote.server.controller');
	const notes = require('../../app/controllers/note.server.controller');
    app.get('/', index.render); 
	app.get('/index', index.render); 
    app.get('/getNotes', notes.list);
	app.get('/viewNote', viewNote.render);
	app.post('/createNote', notes.create);
	//app.delete('/deleteNote/:noteID',notes.delete);
	app.param('noteId', notes.noteByID);
};