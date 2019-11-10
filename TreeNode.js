class TreeNode {
  constructor(key, node, arrayOfNodes) {
    this.key = key;
    this.nodes = node;
    if(!Array.isArray(node)){
      this.nodes = [node];
    }
    this.value = 0;
    this.arrayOfNodes = arrayOfNodes;
    this.kids = [];
  }
  removeMyself() { // z tablicy wszystkich węzłów usuwamy te, ktore już się znajdują w drzewie
    this.arrayOfNodes = this.arrayOfNodes.filter(item => !this.nodes.includes(item));
  }
  makeChildren(node) { // tworzymy nową generacje dzieci
    this.nodes.push(node);
    this.removeMyself(node);
    return [ this.nodes, this.arrayOfNodes];
  }
  getKids() { // zwracamy dzieci 
    return this.kids;
  }
  getLengthOfArrayOfNodes(){ //  zwracca długość ArrayOfNodes
    return this.arrayOfNodes.length;
  }
  getLastNode(){
    return this.nodes[this.nodes.length-1];
  }
  getFirstNode(){
    return this.nodes[0];
  }
}
export default TreeNode;
