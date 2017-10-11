'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pesertaController = require('./pesertaController.js');

var _pesertaController2 = _interopRequireDefault(_pesertaController);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var route = _express2.default.Router();

route.get('/peserta', function (req, res) {
    //res.send('respon');
    _pesertaController2.default.getPeserta(function (err, respon) {
        if (err) {
            throw err;
        }
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(respon));

    });
    ///
});

module.exports = route;