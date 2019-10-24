class Timer{
    constructor(){
        this.count = [];
    }
    start1(){
        this.start = process.hrtime()[1];
    }
    count1(){
        this.count.push(process.hrtime()[1] - this.start);
        console.log(this.count);
    }
}
export default Timer;