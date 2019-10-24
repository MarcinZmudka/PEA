class Timer{
    constructor(){
        this.count = [];
    }
    start(){
        this.start = process.hrtime();
    }
    count(){
        this.count.push(process.hrtime() - this.start)
        console.log(this.count);
    }
}
export default Timer;