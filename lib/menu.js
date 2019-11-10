"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _timer = _interopRequireDefault(require("./timer"));

var _importer = _interopRequireDefault(require("./importer"));

var _Handler = _interopRequireDefault(require("./Handler"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

var _BruteForce = _interopRequireDefault(require("./BruteForce"));

var readline = require("readline-sync");

var nodes = null;
var timer = new _timer["default"]();

function showMenu() {
  console.log("Wybierz jeden z podpunktów");
  console.log("0. Załaduj plik");
  console.log("1. Pokaż załadowny plik");
  console.log("2. BruteForce");
  console.log("3. Branch & Bound");
  console.log("4. Wyjdz z programu");
}

function choose(number) {
  switch (number) {
    case "1":
      showNodes();
      break;

    case "0":
      importFunc();
      break;

    case "2":
      bruteForce();
      break;

    case "3":
      branchBound();
      break;

    case "4":
      return;

    default:
      null;
  }

  init();
}

function init() {
  showMenu();
  read("", choose);
}

function importFunc() {
  //funckja importująca wskazany plik
  try {
    read("podaj nazwę pliku", function (name) {
      nodes = (0, _importer["default"])(name);
    });
  } catch (err) {
    console.log(err.code);
  }
}

function read(text, callback) {
  //funckja czytajaca dane wpisane do użytkownika i wywołująca funckję podaną jako paramtr z danymi jako parametrem
  var feedback = readline.question(text);
  callback(feedback);
}

function showNodes() {
  if (nodesNotNull) {
    console.log(nodes);
  }
}

function bruteForce() {
  //funckja uruchamiająca bruteForce
  if (nodesNotNull()) {
    var _bruteForce = new _BruteForce["default"](nodes);

    timer.init();

    _bruteForce.start();

    console.log("Najlepszy wynik : ".concat(_bruteForce.bestValue));
    console.log("Najlepsza droga:");
    console.log(_bruteForce.que);
    timer.submit("BruteForce");
  }
}

function branchBound() {
  // funckja uruchamiająca branch bound
  if (nodesNotNull()) {
    var arrayOfTrees = [];
    var arrayOfValues = [];
    var arrayOfNodes = [];
    var handler = new _Handler["default"]();
    timer.init();

    for (var i = 0; i < nodes.length; i++) {
      arrayOfTrees.push(new _TreeNode["default"](0, [nodes[i]], nodes));
      handler.setGenerations([arrayOfTrees[i]]);
      handler.start();
      arrayOfValues.push(handler.state.valuesOfGenerations);
      arrayOfNodes.push(handler.state.bestGeneration);
    } //znajdowanie wyniku


    var compare = function compare(a, b) {
      return a - b;
    };

    timer.submit("Branch & Bound");
    var sortedValues = [].concat(arrayOfValues).sort(compare);
    var index = arrayOfValues.indexOf(sortedValues[0]);
    var winner = [arrayOfValues[index], arrayOfNodes[index].nodes];
    console.log("Najlepszy wynik : ".concat(winner[0]));
    console.log("Najlepsza droga:");
    console.log(winner[1]);
  }
}

function nodesNotNull() {
  //funckja sprawdzjąca czy plik z danymi zostal wczytany
  if (nodes == null) {
    console.log("Musisz zaimportować plik, by podjąć dalsze kroki");
    return false;
  }

  return true;
}

var _default = init;
exports["default"] = _default;