node[1] // wezeł 2
elements[4] // krawędź prowadząca do węzła numer 5
.attributes.cost // koszt krawędzi

/*Bound*/
const arrayOfTrees = [];
const arrayOfValues = [];
const arrayOfNodes = [];
const handler = new Handler();

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
console.log(winner);
/*Brute*/
const bruteForce = new BruteForce(nodes);
bruteForce.start();
console.log(bruteForce.bestValue);
/*Make XML*/
const xml = new makeUML(100 , 17);
xml.start("17");