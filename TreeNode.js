class TreeNode {
  constructor(key, node, arrayOfNodes) {
    this.key = key;
    this.nodes = node;
    this.arrayOfNodes = arrayOfNodes;
    this.kids = [];
  }
  removeMyself() {
    this.arrayOfNodes = this.arrayOfNodes.filter(item => !this.nodes.includes(item));
  }
  makeChildren() {
    this.arrayOfNodes.map(node => {
      this.kids.push(
        new TreeNode(node.key, [ ...this.nodes, node], this.arrayOfNodes)
      );
    });
  }
  getKids() {
    return this.kids;
  }
  getLengthOfArrayOfNodes(){
    return this.arrayOfNodes.length;
  }
}
export default TreeNode;
