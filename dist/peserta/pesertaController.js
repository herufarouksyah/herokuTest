'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pesertaModel = require('./pesertaModel.js');

var _pesertaModel2 = _interopRequireDefault(_pesertaModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPeserta = function getPeserta(callback, limit) {
    _pesertaModel2.default.find(callback).limit(limit);
};



module.exports = { getPeserta: getPeserta };