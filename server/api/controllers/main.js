exports.mainGet = (req, res, next) => {
	res.status(200).send({
		message: 'Hello my friend!'
	});
};

exports.mainPost = (req, res, next) => {
	res.status(200).send({
		message: req.body.message
	});
};
