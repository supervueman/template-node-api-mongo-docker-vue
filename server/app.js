const express = require(`express`);
const bodyParser = require(`body-parser`);
const serveStatic = require('serve-static');
const path = require('path');
const mongoose = require('mongoose');
const mainRouter = require('./api/routers/main.js');
const user = require('./api/routers/user.js');

mongoose.connect(
	`mongodb://${'localhost:27017'}/template`, {
		useNewUrlParser: true,
		useCreateIndex: true
	}
);

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'development') {
	app.use(serveStatic(path.join(__dirname, '../client')));
}

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
	next();
});

app.use('/', mainRouter);
app.use('/user', user);

app.use((req, res, next) => {
	const err = new Error(`Not Found`);
	err.status = 404;
	next(err);
});

app.use((error, req, res) => {
	res.status(error.status || 500);
	res.render(`error`, {
		message: error.message,
		error: !config.IS_PRODUCTION ? error : {}
	});
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
