const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @module
 * @function signup
 * @var {Object} user
 * @var {Object} result
 */
exports.signup = (req, res, next) => {
	bcrypt.hash(req.body.password, 10, async (err, hash) => {
		const user = new User({
			_id: new mongoose.Types.ObjectId(),
			email: req.body.email,
			password: hash
		});

		const result = await user.save();

		if (result._id) {
			return res.status(201).json({
				message: 'Reqistration success'
			});
		}
		res.status(500).send({
			error: err
		});
	});
};

exports.signin = async (req, res, next) => {
	const user = await User.findOne({
		email: req.body.email
	}).exec();

	if (!user) {
		return res.status(401).send({
			message: 'Auth failed'
		});
	}

	bcrypt.compare(req.body.password, user.password, (err, result) => {
		if (err !== undefined) {
			return res.status(401).send({
				message: 'Auth failed'
			});
		}

		if (result) {
			const token = jwt.sign({
					userId: user._id
				},
				'stopsecretkeyahtung', {
					expiresIn: '1h'
				}
			);

			user.password = '';

			return res.status(200).send({
				message: 'Auth successful',
				token: token
			});
		} else {
			return res.status(401).send({
				message: 'Auth failed'
			});
		}

	});
	res.status(500).send({
		error: err
	});
};

exports.logout = (req, res) => {
	res.status(200).send({
		auth: false,
		token: null
	});
};

exports.profile = (req, res) => {
	const token = req.headers['x-access-token'];
	if (token === null) {
		return res.status(401).send({
			auth: false,
			message: 'No token provided.'
		});
	}

	jwt.verify(token, 'stopsecretkeyahtung', async (err, decoded) => {
		if (err) {
			return res
				.status(422)
				.send({
					auth: false,
					message: 'Failed to authenticate token.'
				});
		}

		await User.findById(decoded.userId, (err, user) => {
			if (err) {
				return res.status(500).send('There was a problem finding the user.');
			}
			if (!user) {
				return res.status(404).send('No user found.');
			}
			user.password = 0;
			res.status(200).send(user);
		});
	});
};
