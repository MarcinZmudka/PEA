import Count from "./Count.js";

class Handler {
  state = {
    bestGeneration: null, //najlepsza geenracja
    generations: null, // wszystkie generacje
    valuesOfGenerations: [], //wartości wszystkcih generacji
  };
  setGenerations(kids) { // ustawia dzieci najlepszego węzła jako następną generacje
    this.state.generations = kids;
    this.state.bestGeneration = null;
    this.state.valuesOfGenerations = [];
  }
  countValuesOfGenerations() { //obliczamy wartości generacji
    const kids = this.state.generations;
    const counter = new Count();
    kids.map(kid => {
      counter.count(kid.nodes);
      this.state.valuesOfGenerations.push(counter.getValue());
    });
  }
  findTheBestValue() { //znajdujemy najlepszą wartość 
    const compare = (a, b) => {
      return a - b;
    };
    const newArray = [...this.state.valuesOfGenerations].sort(compare); //tworzymy nową tablicę i sortujemy z pomocą funckji porównującejm ponieważ sort służy w domyśle do sortowania napisów
    const best = this.state.valuesOfGenerations.indexOf(newArray[0]); // bierzemy najlepszą wartość
    this.state.bestGeneration = this.state.generations[best]; // i wstawiamy do tablicy najlepszej generacji
  }
  makeNewGeneration() { //tworzymy nowe dzieci
    this.state.bestGeneration.removeMyself();
    this.state.bestGeneration.makeChildren();
    this.setGenerations(this.state.bestGeneration.getKids());
  }
  start() { //rozpoczyna działanie algorytmu
    this.countValuesOfGenerations();
    this.findTheBestValue();
    while (this.state.generations[0].getLengthOfArrayOfNodes() > 1) {
      this.makeNewGeneration();
      this.countValuesOfGenerations();
      this.findTheBestValue();
    }
    this.addLastStep();
  }
  addLastStep(){ //dodaje przejście na początek
    const first = this.state.bestGeneration.nodes[0];
    const last = this.state.bestGeneration.nodes[this.state.bestGeneration.nodes.length-1];
    const value  = last.elements[first.key].attributes.cost;
    this.state.valuesOfGenerations[0] += parseFloat(value);
  }
}
export default Handler;
