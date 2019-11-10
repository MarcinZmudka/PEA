class Estimator {
  minOne(node) {
    let min = 999999;
    node.elements.map((node, index) => {
      if (parseFloat(node.attributes.cost) < this.second) {
        this.second = parseFloat(node.attributes.cost);
      }
      if (parseFloat(node.attributes.cost) < min) {
        this.second = min;
        min = parseFloat(node.attributes.cost);
      }
    });
    return min;
  }
  minTwo(node) {
    const one = this.minOne(node);
    return this.second;
  }
  countWeight(treeNode) {
    const indexOne = treeNode.nodes.length - 2;
    const indexTwo = treeNode.nodes.length - 1;
    const keyOne = treeNode.nodes[indexOne].key;
    const keyTwo = treeNode.nodes[indexTwo].key;
    return parseFloat(treeNode.nodes[keyOne].elements[keyTwo].attribute.cost);
  }
}
export default Estimator;
