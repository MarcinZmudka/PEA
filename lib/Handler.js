"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Count = _interopRequireDefault(require("./Count.js"));

var Handler =
/*#__PURE__*/
function () {
  function Handler() {
    (0, _classCallCheck2["default"])(this, Handler);
    (0, _defineProperty2["default"])(this, "state", {
      bestGeneration: null,
      //najlepsza geenracja
      generations: null,
      // wszystkie generacje
      valuesOfGenerations: [] //wartości wszystkcih generacji

    });
  }

  (0, _createClass2["default"])(Handler, [{
    key: "setGenerations",
    value: function setGenerations(kids) {
      // ustawia dzieci najlepszego węzła jako następną generacje
      this.state.generations = kids;
      this.state.bestGeneration = null;
      this.state.valuesOfGenerations = [];
    }
  }, {
    key: "countValuesOfGenerations",
    value: function countValuesOfGenerations() {
      var _this = this;

      //obliczamy wartości generacji
      var kids = this.state.generations;
      var counter = new _Count["default"]();
      kids.map(function (kid) {
        counter.count(kid.nodes);

        _this.state.valuesOfGenerations.push(counter.getValue());
      });
    }
  }, {
    key: "findTheBestValue",
    value: function findTheBestValue() {
      //znajdujemy najlepszą wartość 
      var compare = function compare(a, b) {
        return a - b;
      };

      var newArray = (0, _toConsumableArray2["default"])(this.state.valuesOfGenerations).sort(compare); //tworzymy nową tablicę i sortujemy z pomocą funckji porównującejm ponieważ sort służy w domyśle do sortowania napisów

      var best = this.state.valuesOfGenerations.indexOf(newArray[0]); // bierzemy najlepszą wartość

      this.state.bestGeneration = this.state.generations[best]; // i wstawiamy do tablicy najlepszej generacji
    }
  }, {
    key: "makeNewGeneration",
    value: function makeNewGeneration() {
      //tworzymy nowe dzieci
      this.state.bestGeneration.removeMyself();
      this.state.bestGeneration.makeChildren();
      this.setGenerations(this.state.bestGeneration.getKids());
    }
  }, {
    key: "start",
    value: function start() {
      //rozpoczyna działanie algorytmu
      this.countValuesOfGenerations();
      this.findTheBestValue();

      while (this.state.generations[0].getLengthOfArrayOfNodes() > 1) {
        this.makeNewGeneration();
        this.countValuesOfGenerations();
        this.findTheBestValue();
      }

      this.addLastStep();
    }
  }, {
    key: "addLastStep",
    value: function addLastStep() {
      //dodaje przejście na początek
      var first = this.state.bestGeneration.nodes[0];
      var last = this.state.bestGeneration.nodes[this.state.bestGeneration.nodes.length - 1];
      var value = last.elements[first.key].attributes.cost;
      this.state.valuesOfGenerations[0] += parseFloat(value);
    }
  }]);
  return Handler;
}();

var _default = Handler;
exports["default"] = _default;