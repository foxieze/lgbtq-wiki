"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import sequelize 
// import connection 
// init DataTypes
var DataTypes = _sequelize.Sequelize.DataTypes; // Define schema

var Word = _database["default"].define('Word', {
  word: {
    type: DataTypes.STRING,
    allowNull: false
  },
  wordslug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shortdef: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  longdef: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {}); // Export model Product


var _default = Word;
exports["default"] = _default;