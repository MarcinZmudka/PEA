import importer from "./importer.js";
import TreeNode from "./TreeNode.js";
import UpReckon from "./Reckon.js";
import Handler from "./Handler.js";
import BruteForce from "./BruteForce.js";
import makeUML from "./makeXML";
import Count from "./Count.js";
import Timer1 from "./timer.js";

const nodes = importer(5, 0);
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


const arrayOfTrees = [];
const arrayOfValues = [];
const arrayOfNodes = [];
const handler = new Handler();
const timer1 = new Timer1();
timer1.start1();
for(let i =0; i<nodes.length; i++){
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
timer1.count1();
console.log(winner);
console.log("bruteforce");
timer1.start1();
const bruteForce = new BruteForce(nodes);
bruteForce.start();
console.log(bruteForce.bestValue);
console.log(bruteForce.que);
timer1.count1();