import nodes from "./importer.js";
import TreeNode from "./TreeNode.js";

//console.log((nodes));
const treeNode = new TreeNode(0, [nodes[0]], nodes);
treeNode.removeMyself();
treeNode.makeChildren();
console.log(treeNode.getKids());