import importer from "./importer.js";
import TreeNode from "./TreeNode.js";
import UpReckon from "./Reckon.js";
import Handler from "./Handler.js";
import BruteForce from "./BruteForce.js";
import makeUML from "./makeXML";
import Count from "./Count.js";
import Timer1 from "./timer.js";
import menu from "./menu";
// menu();
// const nodes = importer(5, 0);
// const bruteForce = new BruteForce(nodes);
// bruteForce.start();
// console.log(bruteForce.bestValue);
// console.log(bruteForce.que);
// console.log(bruteForce.count);

// const treeNode = new TreeNode(0, [nodes[0]], nodes);
// const handler = new Handler();
// handler.setGenerations([treeNode]);
// handler.start();
// console.log(handler.state.bestGeneration);
// console.log(handler.state.valuesOfGenerations);

const timer1 = new Timer1();
function runBB(nodes) {
  const arrayOfTrees = [];
  const arrayOfValues = [];
  const arrayOfNodes = [];
  const handler = new Handler();

  timer1.init();
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
  timer1.submit();
}
for (let i = 0; i < 100; i++) {
  timer1.init();
  const nodes = importer(`n5v${i}`);
  const bruteForce = new BruteForce(nodes);
  bruteForce.start();
  timer1.submit();
  // console.log(bruteForce.bestValue);
  // console.log(bruteForce.que);
  // console.log(bruteForce.count);
}
let value = 0;
for (let i = 0; i < 100; i++) {
  value += timer1.count[i];
}
console.log(value / 100);
