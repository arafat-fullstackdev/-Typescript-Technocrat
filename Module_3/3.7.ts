{
    // Statics OOP

class Counter{
    static count: number =0;
    increment(){
        return (Counter.count = Counter.count +1);
    }

    decrement(){
        return (Counter.count = Counter.count -1);
    }
}

const instanceal = new Counter();
console.log(instanceal.increment());
const instanceal1 = new Counter();
console.log(instanceal1.increment());

}