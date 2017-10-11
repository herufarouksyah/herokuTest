'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pesertaSchema = _mongoose2.default.Schema({
    KdPeserta: String,
    NamaPeserta: String,
    AlamatPeserta: String,
    KdProvinsi: String,
    KdKota: String,
    KdKec: String,
    TglLahir: String,
    KdStatusPeserta: String,
    Email: String,
    Blog: String
});

var Peserta = module.exports = _mongoose2.default.model('Peserta', pesertaSchema,'Peserta');