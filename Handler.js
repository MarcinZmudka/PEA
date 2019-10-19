import UpReckon from "./Reckon.js";

class Handler {
  state = {
    bestGeneration: null, //najlepsza geenracja
    generations: null, // wszystkie generacje
    valuesOfGenerations: [] //wartości wszystkcih generacji
  };
  setGenerations(kids) {
    this.state.generations = kids;
    this.state.bestGeneration = null;
    this.state.valuesOfGenerations = [];
  }
  countValuesOfGenerations() { //obliczamy wartości generacji
    const kids = this.state.generations;
    const upReckon = new UpReckon();
    kids.map(kid => {
      upReckon.initTrain(kid.nodes);
      while (upReckon.isAnyInLeft()) {
        upReckon.hitchNewElement();
      }
      this.state.valuesOfGenerations.push(upReckon.down);
    });
  }
  findTheBestValue() {
    const compare = (a, b) => {
      return a - b;
    };
    const newArray = [...this.state.valuesOfGenerations].sort(compare); //tworzymy nową tablicę i sortujemy z pomocą funckji porównującejm ponieważ sort służy w domyśle do sortowania napisów
    const best = this.state.valuesOfGenerations.indexOf(newArray[0]); // bierzemy najlepszą wartość
    this.state.bestGeneration = this.state.generations[best]; // i wstawiamy do tablicy najlepszej generacji
  }
  makeNewGeneration() {
    this.state.bestGeneration.removeMyself();
    this.state.bestGeneration.makeChildren();
    this.setGenerations(this.state.bestGeneration.getKids());
  }
  start() {
    this.countValuesOfGenerations();
    this.findTheBestValue();
    while (this.state.generations[0].getLengthOfArrayOfNodes() > 1) {
      this.makeNewGeneration();
      this.countValuesOfGenerations();
      this.findTheBestValue();
    }
    //this.addLastStep();
    //this.findTheBestValue();
  }
  addLastStep(){
    const first = this.bestGeneration[0];
    const last = this.bestGeneration[this.bestGeneration.length-1];
    const value  = last.elements[first.key].attributes.cost;
    this.b
  }
}

export default Handler;
