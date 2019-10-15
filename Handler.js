import UpReckon from "./Reckon.js";

class Handler {
  state = {
    bestGeneration: null,
    generations: null,
    valuesOfGenerations: []
  };
  setGenerations(kids) {
    this.state.generations = kids;
    this.state.bestGeneration = null;
    this.state.valuesOfGenerations = [];
  }
  countValuesOfGenerations() {
    const kids = this.state.generations;
    const upReckon = new UpReckon();
    kids.map(kid => {
      upReckon.initTrain(kid.nodes);
      while (upReckon.isAnyInLeft()) {
        upReckon.hitchNewElement();
      }
      //console.log(upReckon.down);
      this.state.valuesOfGenerations.push(upReckon.down);
    });
  }
  findTheBestValue() {
    const compare = (a, b) => {
      return a - b;
    };
    const newArray = [...this.state.valuesOfGenerations].sort(compare); //tworzymy nową tablicę i sortujemy z pomocą funckji porównującejm ponieważ sort służy w domyśle do sortowania napisów
    const best = this.state.valuesOfGenerations.indexOf(newArray[0]);
    this.state.bestGeneration = this.state.generations[best];
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
  }
}

export default Handler;
