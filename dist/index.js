'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dbmongo = require('./config/dbmongo.js');

var _dbmongo2 = _interopRequireDefault(_dbmongo);

var _pesertaRoute = require('./peserta/pesertaRoute');

var _pesertaRoute2 = _interopRequireDefault(_pesertaRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

app.use('/api', _pesertaRoute2.default);

app.get('/', function (req, res) {
	res.send('Selamat Datang');
});

app.listen(8820);