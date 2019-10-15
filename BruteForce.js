class BruteForce{
    constructor(nodes){
        this.nodes = nodes;
        this.bestValue = -1;
        this.que = null;
    }
    getCostOfConnection(from, to, value = 0){ // wylicza koszt połączenia
        return value + parseFloat(this.nodes[from.key].elements[to.key].attributes.cost);
    }
    makeConnections(que, left, value, deep = 0){ // łączy węzły 
        left.map( (item, index, array) => {
            const newValue = this.getCostOfConnection(que[que.length-1], item, value);
            const newLeft = this.filterMe(item, array);
            if(que.length > 17){
                console.log("ALARM");
            }
            if(newLeft.length > 0){
                this.makeConnections([...que, item], newLeft, newValue, deep+1);
            }
            else{
                this.compareValue(que, value);
            }
        })
    }
    compareValue(que, value){ // znajduje najlepszą wartość
        if(this.bestValue = -1){
            this.bestValue = value;
            this.que = que;
            return;
        }
        if(value < this.bestValue){
            this.bestValue = value;            
            this.que = que;
        }
    }
    start(){
        this.nodes.map(node => { // uruchamiamy każdy węzeł jako startowy
            const left = this.filterMe(node, this.nodes);
            this.makeConnections([node], left);
        })
    }
    filterMe(me, array){ // funkcja zwraca tablice bez elementu "me"
        return array.filter(item => item != me);
    }
}

export default BruteForce;