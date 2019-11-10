"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var BruteForce =
/*#__PURE__*/
function () {
  function BruteForce(nodes) {
    (0, _classCallCheck2["default"])(this, BruteForce);
    this.nodes = nodes;
    this.bestValue = -1;
    this.que = null; //kolejka węzłów
  }

  (0, _createClass2["default"])(BruteForce, [{
    key: "getCostOfConnection",
    value: function getCostOfConnection(from, to) {
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // wylicza koszt połączenia
      return parseFloat(this.nodes[from.key].elements[to.key].attributes.cost);
    }
  }, {
    key: "makeConnections",
    value: function makeConnections(que, left) {
      //tworzy połączenie pomiędzy kolejką, pozostałymi wierzchołakmi
      if (left.length > 0) {
        for (var i = 0; i < left.length; i++) {
          this.makeConnections([].concat((0, _toConsumableArray2["default"])(que), [left[i]]), (0, _toConsumableArray2["default"])(this.filterMe(left[i], left)));
        }
      } else {
        this.compareValue(que);
      }
    }
  }, {
    key: "compareValue",
    value: function compareValue(que) {
      var _this = this;

      // wylicza wartość i znajduje najlepszą wartość
      var value = 0;
      que.map(function (node, index, array) {
        var thisNode = node;
        var nextNode = array[index + 1];

        if (index + 1 == array.length) {
          nextNode = array[0];
        }

        value += _this.getCostOfConnection(thisNode, nextNode);
      });

      if (this.bestValue == -1) {
        this.bestValue = value;
        this.que = que;
        return;
      }

      if (value < this.bestValue) {
        this.bestValue = value;
        this.que = que;
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.nodes.map(function (node, index, array) {
        // uruchamiamy każdy węzeł jako startowy
        var left = _this2.filterMe(node, array);

        _this2.makeConnections([node], (0, _toConsumableArray2["default"])(left));
      });
    }
  }, {
    key: "filterMe",
    value: function filterMe(me, array) {
      // funkcja zwraca tablice bez elementu "me"
      return array.filter(function (item) {
        return item != me;
      });
    }
  }]);
  return BruteForce;
}();

var _default = BruteForce;
exports["default"] = _default;