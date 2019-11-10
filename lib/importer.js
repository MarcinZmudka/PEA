"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _xmlJs = _interopRequireDefault(require("xml-js"));

function importer(name) {
  var nodes = [];

  try {
    var xml = _fs["default"].readFileSync("./files/".concat(name, ".xml"), "utf8"); //czytanie pliu


    var result = _xmlJs["default"].xml2json(xml, {
      compact: false,
      spaces: 0
    }); //konwersja z xml na format json


    var all = JSON.parse(result); //konwersja z json na obiekt Javascriptu

    var i = 0;
    all.elements[0].elements[5].elements.map(function (node) {
      return node.key = i++;
    }); //nadanie każdemu wierzchołkowi inwidaulnego numeru

    nodes = all.elements[0].elements[5].elements; // wyłuskanie grafu
  } catch (err) {
    console.log(err);
  }

  return nodes;
}

var _default = importer;
exports["default"] = _default;