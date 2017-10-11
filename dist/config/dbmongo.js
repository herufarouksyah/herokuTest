"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = "heru";
var pass = "qazWSXedc";
var url = "ds115045.mlab.com";
var port = 15045;
var db = "pelatihandb";
_mongoose2.default.connect("mongodb://" + user + ":" + pass + "@" + url + ":" + port + "/" + db);