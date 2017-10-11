'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pesertaController = require('./pesertaController.js');

var _pesertaController2 = _interopRequireDefault(_pesertaController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = _express2.default.Router();

route.get('/peserta', function (req, res) {
    res.send('respon');

    _pesertaController2.default.getPeserta((err, respon) => {
        if (err) {
            throw err;
        }
        res.json(respon);
        //res.send('respon');
    });
    ///
});



module.exports = route;


