"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var TreeNode =
/*#__PURE__*/
function () {
  function TreeNode(key, node, arrayOfNodes) {
    (0, _classCallCheck2["default"])(this, TreeNode);
    this.key = key;
    this.nodes = node;
    this.arrayOfNodes = arrayOfNodes;
    this.kids = [];
  }

  (0, _createClass2["default"])(TreeNode, [{
    key: "removeMyself",
    value: function removeMyself() {
      var _this = this;

      // z tablicy wszystkich węzłów usuwamy te, ktore już się znajdują w drzewie
      this.arrayOfNodes = this.arrayOfNodes.filter(function (item) {
        return !_this.nodes.includes(item);
      });
    }
  }, {
    key: "makeChildren",
    value: function makeChildren() {
      var _this2 = this;

      // tworzymy nową generacje dzieci
      this.arrayOfNodes.map(function (node) {
        _this2.kids.push(new TreeNode(node.key, [].concat((0, _toConsumableArray2["default"])(_this2.nodes), [node]), _this2.arrayOfNodes));
      });
    }
  }, {
    key: "getKids",
    value: function getKids() {
      // zwracamy dzieci 
      return this.kids;
    }
  }, {
    key: "getLengthOfArrayOfNodes",
    value: function getLengthOfArrayOfNodes() {
      //  zwracca długość ArrayOfNodes
      return this.arrayOfNodes.length;
    }
  }]);
  return TreeNode;
}();

var _default = TreeNode;
exports["default"] = _default;