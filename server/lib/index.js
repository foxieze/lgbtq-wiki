"use strict";

var _database = _interopRequireDefault(require("./config/database"));

var _Word = require("./controllers/Word");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var PORT = process.env.PORT || 8080;

try {
  await _database["default"].authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

var app = express();
app.use(express.json());
app.get('/api/words', _Word.getWords);
app.listen(PORT, function () {
  console.log("App listening on port " + PORT);
});