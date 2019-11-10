"use strict";

node[1]; // wezeł 2

elements[4] // krawędź prowadząca do węzła numer 5
.attributes.cost; // koszt krawędzi

/*Bound*/

var arrayOfTrees = [];
var arrayOfValues = [];
var arrayOfNodes = [];
var handler = new Handler();

for (var i = 0; i < nodes.length; i++) {
  arrayOfTrees.push(new TreeNode(0, [nodes[i]], nodes));
  handler.setGenerations([arrayOfTrees[i]]);
  handler.start();
  arrayOfValues.push(handler.state.valuesOfGenerations);
  arrayOfNodes.push(handler.state.bestGeneration);
} //znajdowanie wyniku


var compare = function compare(a, b) {
  return a - b;
};

var sortedValues = [].concat(arrayOfValues).sort(compare);
var index = arrayOfValues.indexOf(sortedValues[0]);
var winner = [arrayOfValues[index], arrayOfNodes[index].nodes];
console.log(winner);
/*Brute*/

var bruteForce = new BruteForce(nodes);
bruteForce.start();
console.log(bruteForce.bestValue);
/*Make XML*/

var xml = new makeUML(100, 17);
xml.start("17");