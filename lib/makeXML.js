"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fs = _interopRequireDefault(require("fs"));

var makeUML =
/*#__PURE__*/
function () {
  function makeUML(numberOfFiles, numberOfVertex) {
    (0, _classCallCheck2["default"])(this, makeUML);
    this.filesNumber = numberOfFiles;
    this.vertexNumber = numberOfVertex;
    this.text = "";
  }

  (0, _createClass2["default"])(makeUML, [{
    key: "randomValue",
    value: function randomValue() {
      return Math.floor(Math.random() * 10) + 1;
    }
  }, {
    key: "firstLine",
    value: function firstLine() {
      this.text += '<?xml version="1.0" encoding="UTF-8" standalone="no" ?><travellingSalesmanProblemInstance><name>br17</name>\n<source>TSPLIB</source><description>17 city problem (Repetto)</description><doublePrecision>15</doublePrecision><ignoredDigits>5</ignoredDigits>';
    }
  }, {
    key: "lastLine",
    value: function lastLine() {
      this.text += "</travellingSalesmanProblemInstance>";
    }
  }, {
    key: "writeFile",
    value: function writeFile(folder, name) {
      _fs["default"].writeFileSync("./files/".concat(folder, "/").concat(name, ".xml"), this.text, "utf8");

      this.text = "";
    }
  }, {
    key: "makeGraph",
    value: function makeGraph() {
      this.text += "<graph>\n";

      for (var i = 0; i < this.vertexNumber; i++) {
        this.text += "<vertex>\n";

        for (var j = 0; j < this.vertexNumber; j++) {
          if (i == j) {
            this.text += "<edge cost=\"".concat(9999, "\">", j, "</edge>\n");
          } else {
            this.text += "<edge cost=\"".concat(this.randomValue(), "\">").concat(j, "</edge>\n");
          }
        }

        this.text += "</vertex>\n";
      }

      this.text += "</graph>\n";
    }
  }, {
    key: "start",
    value: function start(name) {
      for (var i = 0; i < this.filesNumber; i++) {
        this.firstLine();
        this.makeGraph();
        this.lastLine();
        this.writeFile(name, "".concat(name, "v").concat(i));
      }
    }
  }]);
  return makeUML;
}();

var _default = makeUML;
exports["default"] = _default;