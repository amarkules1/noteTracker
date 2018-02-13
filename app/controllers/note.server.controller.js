const Note = require('mongoose').model('Note');
exports.create = function(req, res, next) { 
  const note = new Note(req.body);
  note.save((err) => {
    if (err) {
	 return next(err);    
	} 
	else {
		res.status(200).json(note);
	}
  }); 
}; 
exports.list = function(req, res, next) {
	Note.find({}, (err, notes) => {
    if (err) {
	return next(err);
    }
 else {
	res.status(200).json(notes);
    }
  });
 };
 
 exports.read = function(req, res) {
	 res.json(req.note); 
 };
exports.noteByID = function(req, res, next, id) {
	Note.findOne({
    _id: id
  }, (err, note) => {
    if (err) {
	return next(err);
    } else {
	req.note = note;
      next();
    }
  }); 
};
exports.delete = function(req, res) {
	var toRemove = req.note;
	console.log(toRemove);
	toRemove.remove(err => {
    if (err) {
	return next(err);
    } else {
	res.status(200).json(req.note);
    }
  }) 
};