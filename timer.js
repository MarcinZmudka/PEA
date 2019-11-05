class Timer {
  constructor() {
    this.count = [];
  }
  init() {
    //this.start = process.hrtime(); //odpalamy czas
    this.start = new Date();
  }
  submit(text = "") {
    // const newTime = process.hrtime(this.start); //obliczamy czas
    // this.count.push(newTime[0]+newTime[1]); newTime[0]+newTime[1]
    const time = new Date() - this.start;
    console.log(`Czas algorytmu ${text} to ${time} nanosekund`);
  }
}
export default Timer;
