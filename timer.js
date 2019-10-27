class Timer{
    constructor(){
        this.count = [];
    }
    init(){
        this.start = process.hrtime(); //odpalamy czas
    }
    submit(text){
        const newTime = process.hrtime(this.start); //obliczamy czas
        this.count.push(newTime[0]+newTime[1]);
        if(text != null){
            console.log(`Czas algorytmu ${text} to ${newTime[0]+newTime[1]} nanosekund`);
        }
    }
}
export default Timer;