class BruteForce {
  constructor(nodes) {
    this.nodes = nodes;
    this.bestValue = -1;
    this.que = null; //kolejka węzłów
  }
  getCostOfConnection(from, to, value = 0) {
    // wylicza koszt połączenia
    return parseFloat(this.nodes[from.key].elements[to.key].attributes.cost);
  }
  makeConnections(que, left) {
    //tworzy połączenie pomiędzy kolejką, pozostałymi wierzchołakmi
    if (left.length > 0) {
      for (let i = 0; i < left.length; i++) {
        this.makeConnections(
          [...que, left[i]],
          [...this.filterMe(left[i], left)]
        );
      }
    } else {
      this.compareValue(que);
    }
  }
  compareValue(que) {
    // wylicza wartość i znajduje najlepszą wartość
    let value = 0;
    que.map((node, index, array) => {
      const thisNode = node;
      let nextNode = array[index + 1];
      if (index + 1 == array.length) {
        nextNode = array[0];
      }
      value += this.getCostOfConnection(thisNode, nextNode);
    });
    if (this.bestValue == -1) {
      this.bestValue = value;
      this.que = que;
      return;
    }
    if (value < this.bestValue) {
      this.bestValue = value;
      this.que = que;
    }
  }
  start() {
    this.nodes.map((node, index, array) => {
      // uruchamiamy każdy węzeł jako startowy
      const left = this.filterMe(node, array);
      this.makeConnections([node], [...left]);
    });
  }
  filterMe(me, array) {
    // funkcja zwraca tablice bez elementu "me"
    return array.filter(item => item != me);
  }
}

export default BruteForce;
