class Counter {
   static counter: number = 0;
   
    increment() {
        return Counter.counter = Counter.counter + 1
    }
    decrement () {
        return  Counter.counter = Counter.counter - 1
    }
}

const static1 = new Counter()

console.log(static1.increment())
console.log(static1.decrement())