const readline = require("readline-sync");
import Timer from "./timer";
import importer from "./importer";
import TreeNode from "./TreeNode";
import BruteForce from "./BruteForce";
import BnB from "./BnB";
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
function test(){
  nodes = importer("n5v0");
  console.log(nodes[0].elements);  
  console.log(nodes[0].elements[0].elements);  
  console.log(nodes[0].elements ==nodes[0].elements[1].elements);
}
function choose(number) {
  switch (number) {
    case "1":
      //showNodes();
      test();
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
    read("podaj nazwę pliku\n", name => {
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
    timer.submit("BruteForce");
    console.log(`Najlepszy wynik : ${bruteForce.bestValue}`);
    console.log(`Najlepsza droga:`);
    let path = "";
    bruteForce.que.map((node,index) => {
      if(index == 0){
        path += `${node.key}`;
      }
      else{
        path += ` => ${node.key}`;
      }
    })
  }
}

function branchBound() {
  // funckja uruchamiająca branch bound
  if (nodesNotNull()) {
    const bnb = new BnB(nodes);
    timer.init();
    bnb.start();
    timer.submit("Branch & Bound");
    console.log(`Wynik to : ${bnb.final}`);
    let path = "";
    bnb.path.nodes.map((node,index, Array) => {
      if(index == 0){
        path += `${node.key}`;
      }
      else{
        path += ` => ${node.key}`;
      }
    })
    console.log(path);
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
