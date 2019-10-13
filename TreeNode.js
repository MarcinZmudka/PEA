class TreeNode {
  constructor(key, node, arrayOfNodes) {
    this.key = key;
    this.nodes = node; 
    this.arrayOfNodes = arrayOfNodes;
    this.kids = [];
  }
  removeMyself(){
     this.arrayOfNodes = this.arrayOfNodes.filter(node => node.key != this.key);
  }
  makeChildren() {
    this.arrayOfNodes.map(node => {
      this.kids.push(new TreeNode(node.key, [ node, ...this.nodes], this.arrayOfNodes));
    })
  }
  getKids(){
    return this.kids;
  }
}
export default TreeNode;