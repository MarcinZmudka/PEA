class TreeNode {
  constructor(key, node, arrayOfNodes) {
    this.key = key;
    this.nodes = node;
    this.arrayOfNodes = arrayOfNodes;
    this.kids = [];
  }
  removeMyself() { // z tablicy wszystkich węzłów usuwamy te, ktore już się znajdują w drzewie
    this.arrayOfNodes = this.arrayOfNodes.filter(item => !this.nodes.includes(item));
  }
  makeChildren() { // tworzymy nową generacje dzieci
    this.arrayOfNodes.map(node => {
      this.kids.push(
        new TreeNode(node.key, [ ...this.nodes, node], this.arrayOfNodes)
      );
    });
  }
  getKids() { // zwracamy dzieci 
    return this.kids;
  }
  getLengthOfArrayOfNodes(){ //  zwracca długość ArrayOfNodes
    return this.arrayOfNodes.length;
  }
}
export default TreeNode;
