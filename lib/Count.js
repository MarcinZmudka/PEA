"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Count =
/*#__PURE__*/
function () {
  function Count() {
    (0, _classCallCheck2["default"])(this, Count);
    this.down = 0;
    this.que = [];
    this.left = [];
  }

  (0, _createClass2["default"])(Count, [{
    key: "count",
    value: function count(nodes) {
      var _this = this;

      //funkcja obliczająca wagę drogi pomiędzy wierzchołkami przekazanymi w argumencie 
      this.down = 0;
      nodes.map(function (node, index, array) {
        var newIndex = index + 1;

        if (index + 1 < array.length) {
          _this.down += parseFloat(node.elements[array[newIndex].key].attributes.cost);
        }
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.down;
    }
  }]);
  return Count;
}();

var _default = Count;
exports["default"] = _default;