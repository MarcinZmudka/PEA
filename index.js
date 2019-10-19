import nodes from "./importer.js";
import TreeNode from "./TreeNode.js";
import UpReckon from "./Reckon.js";
import Handler from "./Handler.js";
import BruteForce from "./BruteForce.js";
import makeUML from "./makeXML";

const array = [1,2,3];
const bruteForce = new BruteForce(nodes);
bruteForce.start();
console.log(bruteForce.bestValue);
console.log(bruteForce.que);
// console.log(bruteForce.count);

// const xml = new makeUML(5 , 5);
// xml.start("5");
