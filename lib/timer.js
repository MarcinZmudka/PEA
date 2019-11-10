"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    (0, _classCallCheck2["default"])(this, Timer);
    this.count = [];
  }

  (0, _createClass2["default"])(Timer, [{
    key: "init",
    value: function init() {
      //this.start = process.hrtime(); //odpalamy czas
      this.start = new Date();
    }
  }, {
    key: "submit",
    value: function submit() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      // const newTime = process.hrtime(this.start); //obliczamy czas
      // this.count.push(newTime[0]+newTime[1]); newTime[0]+newTime[1]
      var time = new Date() - this.start;
      console.log("Czas algorytmu ".concat(text, " to ").concat(time, " nanosekund"));
    }
  }]);
  return Timer;
}();

var _default = Timer;
exports["default"] = _default;