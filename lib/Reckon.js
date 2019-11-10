"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var UpReckon =
/*#__PURE__*/
function () {
  function UpReckon() {
    (0, _classCallCheck2["default"])(this, UpReckon);
    this.down = 0;
    this.que = [];
    this.left = [];
  }

  (0, _createClass2["default"])(UpReckon, [{
    key: "initTrain",
    value: function initTrain(nodes) {
      var _this = this;

      // znajduje dwójkę o najlepszym połączeniu
      var value = 999;
      var pair = [];

      var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
          if (parseFloat(nodes[i].elements[nodes[j].key].attributes.cost) < value) {
            value = parseFloat(nodes[i].elements[nodes[j].key].attributes.cost);
            pair = nodes.filter(function (node) {
              return node.key == nodes[i].key || node.key == nodes[j].key;
            });
            _this.left = nodes.filter(function (element, index, array) {
              return index != i && index != j;
            });
          }
        };

        for (var j = 0; j < nodes.length; j++) {
          _loop2(j);
        }
      };

      for (var i = 0; i < nodes.length; i++) {
        _loop(i);
      }

      this.que = pair;
      this.down = value;
    }
  }, {
    key: "hitchNewElement",
    value: function hitchNewElement() {
      // łączy pociąg z nowym elementem
      var front = this.checkFront();
      var rear = this.checkBack();
      var newQue = [];

      if (front.value > rear.value) {
        newQue.push.apply(newQue, (0, _toConsumableArray2["default"])(this.que));
        newQue.push(rear.newFirst);
        this.down += parseFloat(rear.value);
        this.removeFromLeft(rear.newFirst);
      } else {
        newQue.push(front.newFirst);
        newQue.push.apply(newQue, (0, _toConsumableArray2["default"])(this.que));
        this.down += parseFloat(front.value);
        this.removeFromLeft(front.newFirst);
      }

      this.que = newQue;
    }
  }, {
    key: "checkFront",
    value: function checkFront() {
      //oblicza najlepsze co można przyczepić z przodu
      var node = this.que[0];
      var value = 99999;
      var newFirst = null;
      this.left.map(function (left) {
        //left jako pozostały
        if (left.elements[node.key].attributes.cost < value) {
          value = left.elements[node.key].attributes.cost;
          newFirst = left;
        }
      });
      return {
        value: value,
        newFirst: newFirst
      };
    }
  }, {
    key: "checkBack",
    value: function checkBack() {
      //oblicza najlepsze co można przyczepić z tyłu
      var node = this.que[this.que.length - 1];
      var value = 99999;
      var newFirst = null;
      this.left.map(function (left) {
        if (node.elements[left.key].attributes.cost < value) {
          value = node.elements[left.key].attributes.cost;
          newFirst = left;
        }
      });
      return {
        value: value,
        newFirst: newFirst
      };
    }
  }, {
    key: "removeFromLeft",
    value: function removeFromLeft(remove) {
      var newLeft = this.left.filter(function (node) {
        return node.key != remove.key;
      });
      this.left = newLeft;
    }
  }, {
    key: "isAnyInLeft",
    value: function isAnyInLeft() {
      return this.left.length > 0;
    }
  }, {
    key: "returnQue",
    value: function returnQue() {
      return this.que;
    }
  }]);
  return UpReckon;
}();

var _default = UpReckon;
exports["default"] = _default;