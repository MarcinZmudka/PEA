node[1] // wezeł 2
elements[4] // krawędź prowadząca do węzła numer 5
.attributes.cost // koszt krawędzi

/*Bound*/
const treeNode = new TreeNode(0, [nodes[0]], nodes);
const handler = new Handler();
handler.setGenerations([treeNode]);
handler.start();
console.log(handler.state.bestGeneration);
console.log(handler.state.valuesOfGenerations);
/*Brute*/
const bruteForce = new BruteForce(nodes);
bruteForce.start();
console.log(bruteForce.bestValue);
/*Make XML*/
const xml = new makeUML(100 , 17);
xml.start("17");