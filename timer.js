class Timer{
    constructor(){
        this.count = [];
    }
    init(){
        this.start = process.hrtime()[1];
    }
    submit(text){
        const newTime = process.hrtime()[1] - this.start;
        this.count.push(newTime);
        if(text != null){
            console.log(`Czas algorytmu ${text} to ${newTime}`);
        }
    }
}
export default Timer;