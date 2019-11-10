import Estimator from "./CostEstimator";
import TreeNode from "./TreeNode";
class BnB {
  constructor(nodes) {
    this.nodes = nodes;
    this.final = 9999999999999;
    this.path = null;
  }
  countInitBound() {
    const estimator = new Estimator();
    let bound = 0;
    this.nodes.map(node => {
      bound += estimator.minOne(node) + estimator.minTwo(node);
    });
    bound = Math.round(bound / 2);
    return bound;
  }
  start() {
    const bound = this.countInitBound();
    const treeNode = new TreeNode(0, this.nodes[0], this.nodes);
    treeNode.removeMyself();
    treeNode.nodes[0].visited = true;
    this.pathRunner(bound, 0, treeNode, 0);
  }
  pathRunner(bound, weight, treeNode, p) {

    if (treeNode.nodes.length == this.nodes.length) {
      const newWeight =
        weight +
        parseFloat(
          treeNode.getLastNode().elements[treeNode.getFirstNode().key]
            .attributes.cost
        ); //dodajemy przejscie na początek
      if (newWeight < this.final) {
        this.final = newWeight;
        this.path = treeNode;
      };
      return;
    }

    for (let i = 0; i < this.nodes.length; i++) {
      const freeNode = this.nodes[i];

      if (freeNode.visited !== true) {

        const newWeight =
          weight +
          parseFloat(
            treeNode.getLastNode().elements[freeNode.key].attributes.cost
          ); //zrobić na to obiekt
        let newBound = bound;

        const estimator = new Estimator();

        if (treeNode.nodes.length < 1) {
          newBound -=
            (estimator.minOne(treeNode.getLastNode()) +
              estimator.minOne(freeNode)) /
            2;
        } else {
          newBound -= parseFloat(
            estimator.minOne(freeNode) +
              estimator.minTwo(treeNode.getLastNode())
          );
        }
        if (newWeight + newBound < this.final) {
          freeNode.visited = true;
          const newTreeNode = new TreeNode(
            treeNode.key + 1,
            [...treeNode.nodes, freeNode]
          );
          this.pathRunner(newBound, newWeight, newTreeNode, p + 1);
        }
        freeNode.visited = false;
      }
    }
  }
}
export default BnB;
