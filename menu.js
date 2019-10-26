const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
import Timer from "./timer";
import importer from "./importer";
let nodes = null;
const timer = new Timer();


function showMenu() {
  console.log("Wybierz jeden z podpunktów");
  console.log("0. Załaduj plik");
  console.log("1. Pokaż załadowny plik");
  console.log("2. BruteForce");
  console.log("3. Branch & Bound");
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
      BruteForce();
      break;
    case "3":
      BranchBound();
      break;
    default:
      null;
  }
  //init();
}

function init() {
  showMenu();
  read("", choose);
}

function importFunc() {
  let folder  = null;
  readline.question("podaj folder", feedback => {
    folder = feedback;
    readline.question("podaj numer pliku", number => {
      nodes = importer(folder, number);
      //readline.close();
    })
    readline.close();
  })
  
  //init();
}

function read(text, callback) {
  readline.question(text, number => {
    callback(number);
    //readline.close();
  });
}
function showNodes(){
  if(nodesNotNull){
    console.log(nodes);
  }
  //init();
}
function BruteForce() {
  if (nodesNotNull()) {
    const bruteForce = new BruteForce(nodes);
    timer.init();
    bruteForce.start();
    console.log(bruteForce.bestValue);
    console.log(bruteForce.que);
    timer.submit("BruteForce");
  }
  //init();
}

function BranchBound() {
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
    const sortedValues = [...arrayOfValues].sort(compare);
    const index = arrayOfValues.indexOf(sortedValues[0]);
    const winner = [arrayOfValues[index], arrayOfNodes[index].nodes];
    timer.submit("Bound & Branch");
  }
  //init();
}
function nodesNotNull() {
  if (nodes == null) {
    console.log("Musisz zaimportować plik, by podjąć dalsze kroki");
    return false;
  }
  return true;
}
export default init;
