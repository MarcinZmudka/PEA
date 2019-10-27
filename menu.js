const readline = require("readline-sync");
import Timer from "./timer";
import importer from "./importer";
import Handler from "./Handler";
import TreeNode from "./TreeNode";
import BruteForce from "./BruteForce";
let nodes = null;
const timer = new Timer();

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
    read("podaj nazwę pliku", name => {
      nodes = importer(name);
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
    const bruteForce = new BruteForce(nodes);
    timer.init();
    bruteForce.start();
    console.log(`Najlepszy wynik : ${bruteForce.bestValue}`);
    console.log(`Najlepsza droga:`);
    console.log(bruteForce.que);
    timer.submit("BruteForce");
  }
}

function branchBound() {
  // funckja uruchamiająca branch bound
  if (nodesNotNull()) {
    const arrayOfTrees = [];
    const arrayOfValues = [];
    const arrayOfNodes = [];
    const handler = new Handler();

    timer.init();
    for (let i = 0; i < nodes.length; i++) {
      arrayOfTrees.push(new TreeNode(0, [nodes[i]], nodes));
      handler.setGenerations([arrayOfTrees[i]]);
      handler.start();
      arrayOfValues.push(handler.state.valuesOfGenerations);
      arrayOfNodes.push(handler.state.bestGeneration);
    }
    //znajdowanie wyniku
    const compare = (a, b) => {
      return a - b;
    };
    timer.submit("Branch & Bound");
    const sortedValues = [...arrayOfValues].sort(compare);
    const index = arrayOfValues.indexOf(sortedValues[0]);
    const winner = [arrayOfValues[index], arrayOfNodes[index].nodes];
    console.log(`Najlepszy wynik : ${winner[0]}`);
    console.log(`Najlepsza droga:`);
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
export default init;
