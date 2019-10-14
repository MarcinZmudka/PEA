class UpReckon {
  constructor() {
    this.down = 0;
    this.que = [];
    this.left = [];
  }
  initTrain(nodes) {
    // znajduje dwójkę o najlepszym połączeniu
    let value = 999;
    let pair = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes.length; j++) {
        if (parseFloat(nodes[i].elements[nodes[j].key].attributes.cost) < value) {
          value = parseFloat(nodes[i].elements[nodes[j].key].attributes.cost);
          pair = nodes.filter(node => node.key == nodes[i].key || node.key == nodes[j].key);
          this.left = nodes.filter(
            (element, index, array) => index != i && index != j
          );
        }
      }
    }
    this.que = pair;
    this.down = value;
  }
  hitchNewElement() {
    // łączy pociąg z nowym elementem
    const front = this.checkFront();
    const rear = this.checkBack();
    const newQue = [];
    if (front.value > rear.value) {
      newQue.push(...this.que);
      newQue.push(rear.newFirst);
      this.down += parseFloat(rear.value);
      this.removeFromLeft(rear.newFirst);
    } else {
      newQue.push(front.newFirst);
      newQue.push(...this.que);
      this.down += parseFloat(front.value);
      this.removeFromLeft(front.newFirst);
    }
    this.que = newQue;
  }
  checkFront() {
    //oblicza najlepsze co można przyczepić z przodu
    const node = this.que[0];
    let value = 99999;
    let newFirst = null;
    this.left.map(left => {
      //left jako pozostały
      if (left.elements[node.key].attributes.cost < value) {
        value = left.elements[node.key].attributes.cost;
        newFirst = left;
      }
    });
    return {
      value,
      newFirst
    };
  }
  checkBack() {
    //oblicza najlepsze co można przyczepić z tyłu
    const node = this.que[this.que.length - 1];
    let value = 99999;
    let newFirst = null;
    this.left.map(left => {
      if (node.elements[left.key].attributes.cost < value) {
        value = node.elements[left.key].attributes.cost;
        newFirst = left;
      }
    });
    return {
      value,
      newFirst
    };
  }
  removeFromLeft(remove) {
    const newLeft = this.left.filter(node => node.key != remove.key);
    this.left = newLeft;
  }
  isAnyInLeft() {
    return this.left.length > 0;
  }
  returnQue() {
    return this.que;
  }
}
export default UpReckon;
