class Count {
    constructor() {
      this.down = 0;
      this.que = [];
      this.left = [];
    }
    count(nodes){ //funkcja obliczająca wagę drogi pomiędzy wierzchołkami przekazanymi w argumencie 
        this.down=0;
        nodes.map( (node, index, array) => {
            let newIndex = index+1;
            if(index+1 < array.length){
                this.down += parseFloat(node.elements[array[newIndex].key].attributes.cost);
            }
        })
    }
    getValue(){
        return this.down;
    }
}
export default Count;