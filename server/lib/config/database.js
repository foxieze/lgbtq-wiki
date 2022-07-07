"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

// import sequelize
// create connection
var sequelize = new _sequelize.Sequelize('lgbtwiki', 'foxieze', '', {
  host: 'localhost',
  dialect: 'mariadb'
}); // export connection

var _default = sequelize;
exports["default"] = _default;