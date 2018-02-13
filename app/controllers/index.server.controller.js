exports.render = function(req, res) {
	if(req.param['toDel']){
		//delete from DB
	}
	res.render('index'); 
};
